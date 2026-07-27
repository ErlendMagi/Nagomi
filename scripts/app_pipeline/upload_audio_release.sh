#!/usr/bin/env bash
# Packs the 15GB audio corpus into <2GB tar parts and attaches them to the
# GitHub release "audio-corpus" (assets up to 2GB each are allowed where a
# git-tracked file must stay under 100MB). Re-runnable: existing parts and
# already-uploaded assets are skipped.
# Restore: cat nagomi_audio.tar.* | tar xf -   (run in the repo root)
set -u
cd /d/njl/nagomi
REPO=ErlendMagi/Nagomi
PARTS=/d/njl/nagomi/dist/audio_parts
TOKEN=$(printf 'protocol=https\nhost=github.com\n' | git credential fill 2>/dev/null | grep ^password= | cut -d= -f2)
[ -z "$TOKEN" ] && { echo "NO TOKEN"; exit 1; }
AUTH="Authorization: token $TOKEN"

mkdir -p "$PARTS"
if ! ls "$PARTS"/nagomi_audio.tar.aa >/dev/null 2>&1; then
  echo "packing audio/ -> $PARTS (this takes a while)"
  tar cf - audio | split -b 1900m - "$PARTS/nagomi_audio.tar."
  echo "packed: $(ls "$PARTS" | wc -l) parts"
fi

# find or create the release
RID=$(curl -s -H "$AUTH" "https://api.github.com/repos/$REPO/releases/tags/audio-corpus" | grep -m1 '"id":' | tr -dc 0-9)
if [ -z "$RID" ]; then
  RID=$(curl -s -X POST -H "$AUTH" "https://api.github.com/repos/$REPO/releases" \
    -d '{"tag_name":"audio-corpus","name":"Audio corpus (15GB, tar parts)","body":"Full conversation audio (11,250 convs). Restore into the repo root:\n\n    cat nagomi_audio.tar.* | tar xf -\n\nParts are a single tar stream split at 1.9GB."}' \
    | grep -m1 '"id":' | tr -dc 0-9)
fi
[ -z "$RID" ] && { echo "RELEASE CREATE FAILED"; exit 1; }
echo "release id $RID"

EXISTING=$(curl -s -H "$AUTH" "https://api.github.com/repos/$REPO/releases/$RID/assets?per_page=100" | grep '"name":' || true)
for f in "$PARTS"/nagomi_audio.tar.*; do
  n=$(basename "$f")
  if echo "$EXISTING" | grep -q "\"$n\""; then echo "skip $n (uploaded)"; continue; fi
  echo "uploading $n ($(du -m "$f" | cut -f1)MB)…"
  code=$(curl -s -o /dev/null -w "%{http_code}" -X POST -H "$AUTH" -H "Content-Type: application/octet-stream" \
    --data-binary @"$f" "https://uploads.github.com/repos/$REPO/releases/$RID/assets?name=$n")
  echo "$n -> HTTP $code"
done
echo ALL DONE
