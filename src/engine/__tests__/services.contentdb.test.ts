// content.db provisioning: the pure error-classification logic behind the
// deleteDatabaseSync repair path (services.ts), plus the pack-start error
// surface (packs.ts).
//
// The actual crash this guards against — "NativeDatabase.prepareSync ...
// java.lang.NullPointerException" from a stale expo-sqlite pool handle after
// content.db is replaced — is NATIVE and can only be verified on-device
// (adb smoke test: update app with a changed corpus hash → start a pack
// download → no crash). These tests only pin the JS-side decisions.
//
// Native modules are mocked because importing services.ts pulls in
// expo-sqlite/expo-asset/expo-file-system and the starter .zip requires,
// none of which load under Node (same approach as packs.test.ts).

jest.mock('expo-sqlite', () => ({
  openDatabaseSync: jest.fn(),
  deleteDatabaseSync: jest.fn(),
  defaultDatabaseDirectory: '/data/user/0/app.nagomi.listen/files/SQLite',
}))
jest.mock('expo-asset', () => ({ Asset: { fromModule: jest.fn() } }))
jest.mock('expo-file-system', () => ({
  File: class {},
  Directory: class {},
  Paths: { cache: {}, document: {} },
}))
jest.mock('../../../assets/starter/starter', () => ({ STARTER_BUNDLES: {} }))

import {
  isDatabaseNotFoundError, shouldReprovisionContent, selfHealReason,
  openContentWithSelfHeal, USER_DB_ERROR_MESSAGE, CONTENT_DB_REPAIR_FAILED_MESSAGE,
} from '../services'
import { PACK_START_ERROR_MESSAGE } from '../packs'

describe('isDatabaseNotFoundError', () => {
  // exact message shape from expo-sqlite 56 android SQLExceptions.kt
  it('matches DatabaseNotFoundException ("nothing to delete" — treated as success)', () => {
    expect(isDatabaseNotFoundError(
      "Database '/data/user/0/app.nagomi.listen/files/SQLite/content.db' not found",
    )).toBe(true)
  })

  it('does NOT match DeleteDatabaseException (live pool handle → raw-delete fallback)', () => {
    expect(isDatabaseNotFoundError(
      "Unable to delete database '/data/user/0/app.nagomi.listen/files/SQLite/content.db' "
      + 'that is currently open. Close it prior to deletion.',
    )).toBe(false)
  })

  it('does NOT match DeleteDatabaseFileException (delete itself failed)', () => {
    expect(isDatabaseNotFoundError(
      "Unable to delete the database file for 'content.db' database",
    )).toBe(false)
  })

  it('does NOT match a substring inside another word', () => {
    expect(isDatabaseNotFoundError('table words notfound something')).toBe(false)
  })

  it('matches case-insensitively (defensive against message drift)', () => {
    expect(isDatabaseNotFoundError("database 'content.db' NOT FOUND")).toBe(true)
  })
})

describe('PACK_START_ERROR_MESSAGE', () => {
  it('is a human sentence with the two actionable steps (restart, retry)', () => {
    expect(PACK_START_ERROR_MESSAGE).toMatch(/fully close and reopen the app/)
    expect(PACK_START_ERROR_MESSAGE).toMatch(/try again/)
    // must never leak a raw native exception at the user
    expect(PACK_START_ERROR_MESSAGE).not.toMatch(/NullPointerException|prepareSync/)
  })
})

describe('calm recovery messages (2026-07-16 brick)', () => {
  it('user.db message promises progress is intact and never leaks native errors', () => {
    expect(USER_DB_ERROR_MESSAGE).toMatch(/progress/i)
    expect(USER_DB_ERROR_MESSAGE).toMatch(/intact/)
    expect(USER_DB_ERROR_MESSAGE).toMatch(/close/i)
    expect(USER_DB_ERROR_MESSAGE).not.toMatch(/NullPointerException|prepareSync|NativeDatabase/)
  })

  it('content.db repair-failed message is calm and actionable', () => {
    expect(CONTENT_DB_REPAIR_FAILED_MESSAGE).toMatch(/progress/i)
    expect(CONTENT_DB_REPAIR_FAILED_MESSAGE).toMatch(/intact/)
    expect(CONTENT_DB_REPAIR_FAILED_MESSAGE).not.toMatch(/NullPointerException|prepareSync|NativeDatabase/)
  })
})

describe('shouldReprovisionContent', () => {
  it('keeps the on-device copy only when the file exists AND the hash matches', () => {
    expect(shouldReprovisionContent(true, 'abc', 'abc')).toBe(false)
  })
  it('re-provisions when the file is missing (even with a matching hash kv)', () => {
    expect(shouldReprovisionContent(false, 'abc', 'abc')).toBe(true)
  })
  it('re-provisions on hash mismatch (app update shipped a new corpus)', () => {
    expect(shouldReprovisionContent(true, 'old', 'new')).toBe(true)
  })
  it('re-provisions when no hash was ever stamped (crashed first copy)', () => {
    expect(shouldReprovisionContent(true, undefined, 'abc')).toBe(true)
    expect(shouldReprovisionContent(true, '', 'abc')).toBe(true)
  })
})

describe('selfHealReason', () => {
  it('classifies the on-device NPE signature as a stale native handle', () => {
    expect(selfHealReason(
      'Call to function \'NativeDatabase.prepareSync\' has been rejected.\n'
      + '-> Caused by: java.lang.NullPointerException',
    )).toBe('stale_native_handle')
  })
  it('classifies half-written/foreign bytes as corrupt', () => {
    expect(selfHealReason('no such table: words')).toBe('corrupt_or_incomplete')
    expect(selfHealReason('file is not a database')).toBe('corrupt_or_incomplete')
    expect(selfHealReason('database disk image is malformed')).toBe('corrupt_or_incomplete')
  })
  it('classifies open failures', () => {
    expect(selfHealReason("Unable to open database 'content.db'")).toBe('open_failed')
  })
  it('falls back to unknown', () => {
    expect(selfHealReason('something else entirely')).toBe('unknown')
  })
})

describe('openContentWithSelfHeal', () => {
  // the deps are injected, so the whole boot decision sequence — the fix for
  // the 2026-07-16 "bricked at startup" report — is testable without native
  // modules: open fails → quarantine → re-copy → reopen; only a SECOND
  // failure surfaces, and calmly.
  const okDb = { ok: true }

  it('happy path: returns the handle, touches nothing else', async () => {
    const quarantine = jest.fn()
    const reprovision = jest.fn().mockResolvedValue(undefined)
    const log = jest.fn()
    const out = await openContentWithSelfHeal({
      openAndProbe: () => okDb, quarantine, reprovision, log,
    })
    expect(out).toBe(okDb)
    expect(quarantine).not.toHaveBeenCalled()
    expect(reprovision).not.toHaveBeenCalled()
    expect(log).not.toHaveBeenCalled()
  })

  it('self-heals: first open fails, quarantine + re-provision, second open wins', async () => {
    let attempts = 0
    const quarantine = jest.fn()
    const reprovision = jest.fn().mockResolvedValue(undefined)
    const log = jest.fn()
    const out = await openContentWithSelfHeal({
      openAndProbe: () => {
        attempts++
        if (attempts === 1) throw new Error('no such table: words')
        return okDb
      },
      quarantine, reprovision, log,
    })
    expect(out).toBe(okDb)
    expect(quarantine).toHaveBeenCalledTimes(1)
    expect(reprovision).toHaveBeenCalledTimes(1)
    // quarantine must run BEFORE re-provision (a fresh copy must never pair
    // with stale sidecars)
    expect(quarantine.mock.invocationCallOrder[0])
      .toBeLessThan(reprovision.mock.invocationCallOrder[0])
    expect(log).toHaveBeenCalledWith('corrupt_or_incomplete', 'no such table: words')
  })

  it('double failure surfaces the CALM message, never the raw native error', async () => {
    const log = jest.fn()
    await expect(openContentWithSelfHeal({
      openAndProbe: () => {
        throw new Error(
          "Call to function 'NativeDatabase.prepareSync' has been rejected.\n"
          + '-> Caused by: java.lang.NullPointerException')
      },
      quarantine: jest.fn(),
      reprovision: jest.fn().mockResolvedValue(undefined),
      log,
    })).rejects.toThrow(CONTENT_DB_REPAIR_FAILED_MESSAGE)
    expect(log).toHaveBeenCalledWith('stale_native_handle', expect.stringContaining('NullPointerException'))
    expect(log).toHaveBeenCalledWith('repair_failed', expect.stringContaining('NullPointerException'))
  })

  it('a reprovision failure surfaces the CALM message, never the raw asset error', async () => {
    const log = jest.fn()
    await expect(openContentWithSelfHeal({
      openAndProbe: () => { throw new Error('unable to open database file') },
      quarantine: jest.fn(),
      reprovision: jest.fn().mockRejectedValue(new Error('content.db asset failed to resolve')),
      log,
    })).rejects.toThrow(CONTENT_DB_REPAIR_FAILED_MESSAGE)
    // the raw detail still reaches telemetry
    expect(log).toHaveBeenCalledWith('repair_failed', 'content.db asset failed to resolve')
  })
})
