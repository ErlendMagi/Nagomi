// M9 pack downloader: the pure planning/retry/progress helpers.
//
// The network + filesystem paths (PackDownloader.start/fetchOne/preflight) are
// deliberately NOT tested here: they are thin orchestration over
// expo-file-system's native File.downloadFileAsync/move and fetch(), none of
// which exist in the jest-expo Node environment — mocking them end-to-end
// would only test the mocks. Their behavior is verified on-device via the
// adb smoke test + the ${base}/applog diagnostics they now emit.
//
// expo-file-system and ../services are mocked because importing them pulls in
// native modules (expo-sqlite, asset requires) that cannot load under Node.

jest.mock('expo-file-system', () => ({
  File: class {},
  Directory: class {},
  Paths: { cache: {}, document: {} },
}))
jest.mock('../services', () => ({
  initServices: jest.fn(),
  ANDROID_LIBRARY_DIR: 'file:///storage/emulated/0/Android/data/app.nagomi.listen/files/bundles',
  DEFAULT_LAN_URL: 'http://10.0.0.32:8765',
}))

import {
  PACK_STEPS, FULL_PACK_MIN_WORDS, packForWords, packUrl, preflightFailMessage,
  failedRunMessage, shouldRetry, shouldEmitProgress, isStalled,
  isHttpStatusFailure, hasEnoughSpace, lowSpaceMessage, zipConvId,
  uniqueStoredConvCount,
  MAX_ATTEMPTS_PER_FILE, STALL_MS, PROGRESS_EVERY, SPACE_HEADROOM,
} from '../packs'

const FULL = PACK_STEPS[PACK_STEPS.length - 1]

describe('packForWords', () => {
  it('the table ends at the TRUE full corpus (19,395 words / 11,240 convs)', () => {
    expect(FULL).toEqual({ words: 19395, convCount: 11240, gb: 10.59 })
  })

  it('returns the exact step for every slider value below the full threshold', () => {
    for (const step of PACK_STEPS) {
      if (step.words >= FULL_PACK_MIN_WORDS) continue // covered below
      expect(packForWords(step.words)).toEqual(step)
    }
  })

  it('maps every value ≥ 19,000 to the FULL pack (the slider snaps to at most 19,000)', () => {
    expect(packForWords(FULL_PACK_MIN_WORDS)).toEqual(FULL)
    expect(packForWords(19000)).toEqual(FULL)
    expect(packForWords(19395)).toEqual(FULL)
    expect(packForWords(99999)).toEqual(FULL)
  })

  it('rounds DOWN between steps — never silently selects a bigger pack', () => {
    expect(packForWords(1500).words).toBe(1000)
    expect(packForWords(14999).words).toBe(14000)
    expect(packForWords(18999).words).toBe(18000)
  })

  it('clamps to the smallest step below it', () => {
    expect(packForWords(0).words).toBe(1000)
    expect(packForWords(-5).words).toBe(1000)
  })
})

describe('packUrl', () => {
  it('joins base and path with exactly one slash', () => {
    expect(packUrl('http://10.0.0.32:8765', 'status.json')).toBe('http://10.0.0.32:8765/status.json')
  })

  it('tolerates a trailing slash on the stored LAN url', () => {
    expect(packUrl('http://10.0.0.32:8765/', 'status.json')).toBe('http://10.0.0.32:8765/status.json')
    expect(packUrl('http://10.0.0.32:8765//', 'applog')).toBe('http://10.0.0.32:8765/applog')
  })

  it('tolerates a leading slash on the path', () => {
    expect(packUrl('http://10.0.0.32:8765', '/bundles/a.zip')).toBe('http://10.0.0.32:8765/bundles/a.zip')
    expect(packUrl('http://10.0.0.32:8765/', '/bundles/a.zip')).toBe('http://10.0.0.32:8765/bundles/a.zip')
  })
})

describe('shouldRetry', () => {
  it('allows a requeue after the first failed attempt', () => {
    expect(shouldRetry(1)).toBe(true)
  })

  it('stops at MAX_ATTEMPTS_PER_FILE', () => {
    expect(shouldRetry(MAX_ATTEMPTS_PER_FILE)).toBe(false)
    expect(shouldRetry(MAX_ATTEMPTS_PER_FILE + 1)).toBe(false)
  })

  it('gives every file exactly MAX_ATTEMPTS_PER_FILE tries in total', () => {
    // simulate the worker loop's bookkeeping for one always-failing file
    let attempts = 0
    let tries = 0
    do { tries++; attempts++ } while (shouldRetry(attempts))
    expect(tries).toBe(MAX_ATTEMPTS_PER_FILE)
  })
})

describe('shouldEmitProgress', () => {
  it('emits every file for small packs (< 100 files)', () => {
    for (let done = 1; done <= 62; done++) {
      expect(shouldEmitProgress(done, 62)).toBe(true)
    }
    expect(shouldEmitProgress(3, 99)).toBe(true)
  })

  it(`emits every ${PROGRESS_EVERY}th file for large packs`, () => {
    expect(shouldEmitProgress(10, 494)).toBe(true)
    expect(shouldEmitProgress(490, 494)).toBe(true)
    expect(shouldEmitProgress(9, 494)).toBe(false)
    expect(shouldEmitProgress(491, 494)).toBe(false)
  })

  it('always emits the final file even when total is not a multiple of 10', () => {
    expect(shouldEmitProgress(494, 494)).toBe(true)
    expect(shouldEmitProgress(100, 100)).toBe(true)
  })
})

describe('isStalled', () => {
  const t0 = 1_752_000_000_000

  it('not stalled at or under the threshold', () => {
    expect(isStalled(t0, t0)).toBe(false)
    expect(isStalled(t0, t0 + STALL_MS)).toBe(false)
  })

  it('stalled strictly past the threshold', () => {
    expect(isStalled(t0, t0 + STALL_MS + 1)).toBe(true)
  })
})

describe('isHttpStatusFailure', () => {
  it('matches the SDK 56 Android UnableToDownloadException message', () => {
    expect(isHttpStatusFailure('Unable to download a file: response has status: 404')).toBe(true)
    expect(isHttpStatusFailure('Unable to download a file: response has status: 500')).toBe(true)
  })

  it('does not match write-stage failures (those deserve the tmp fallback)', () => {
    expect(isHttpStatusFailure('open failed: EACCES (Permission denied)')).toBe(false)
    expect(isHttpStatusFailure('Unable to download a file: response body is null')).toBe(false)
    expect(isHttpStatusFailure('size mismatch (0 vs 812345)')).toBe(false)
  })
})

describe('zipConvId', () => {
  it('strips the 8-hex content hash from pipeline bundle names', () => {
    expect(zipConvId('conv_0042-a1b2c3d4.zip')).toBe('conv_0042')
    expect(zipConvId('conv_11239-DEADBEEF.zip')).toBe('conv_11239')
  })

  it('takes the LAST hyphen segment as the hash when the id itself has hyphens', () => {
    expect(zipConvId('some-conv-a1b2c3d4.zip')).toBe('some-conv')
  })

  it('falls back to the base name for a .zip without a hash suffix', () => {
    expect(zipConvId('conv_0042.zip')).toBe('conv_0042')
    expect(zipConvId('conv_0042-nothex99.zip')).toBe('conv_0042-nothex99')
  })

  it('ignores non-zip files', () => {
    expect(zipConvId('lru.json')).toBe(null)
    expect(zipConvId('conv_0042-a1b2c3d4.zip.tmp')).toBe(null)
  })
})

describe('uniqueStoredConvCount', () => {
  it('counts distinct conversations across both library dirs', () => {
    expect(uniqueStoredConvCount([
      ['conv_0001-aaaaaaaa.zip', 'conv_0002-bbbbbbbb.zip'],
      ['conv_0003-cccccccc.zip'],
    ])).toBe(3)
  })

  it('does not double-count a conv present in both dirs', () => {
    expect(uniqueStoredConvCount([
      ['conv_0001-aaaaaaaa.zip'],
      ['conv_0001-aaaaaaaa.zip'],
    ])).toBe(1)
  })

  it('does not double-count the same conv under DIFFERENT hashes (corpus rebuild)', () => {
    expect(uniqueStoredConvCount([
      ['conv_0001-aaaaaaaa.zip'],
      ['conv_0001-99999999.zip'],
    ])).toBe(1)
  })

  it('ignores non-zip files and handles empty dirs', () => {
    expect(uniqueStoredConvCount([['lru.json'], []])).toBe(0)
    expect(uniqueStoredConvCount([[], []])).toBe(0)
  })
})

describe('free-space guard', () => {
  it('requires the missing bytes plus headroom', () => {
    expect(hasEnoughSpace(10e9, 12e9)).toBe(true)
    expect(hasEnoughSpace(10e9, 10.5e9)).toBe(false) // enough raw, not enough with margin
    expect(hasEnoughSpace(10e9, 3.2e9)).toBe(false)
  })

  it('always passes when nothing is missing (fully resumed pack)', () => {
    expect(hasEnoughSpace(0, 0)).toBe(true)
  })

  it('message states both sides of the honest math in GB', () => {
    const msg = lowSpaceMessage(10e9, 3.2e9)
    expect(msg).toContain(`${(10e9 * SPACE_HEADROOM / 1e9).toFixed(1)} GB`)
    expect(msg).toContain('3.2 GB')
    expect(msg).toContain('smaller pack')
  })
})

describe('user-facing messages', () => {
  it('preflight failure names the URL it tried', () => {
    const msg = preflightFailMessage('http://10.0.0.32:8765')
    expect(msg).toContain('http://10.0.0.32:8765')
    expect(msg).toContain('Wi-Fi')
  })

  it('failed-run message carries the counts and the retry instruction', () => {
    const msg = failedRunMessage(3, 494)
    expect(msg).toContain('3 of 494')
    expect(msg).toContain('Download to phone')
  })
})
