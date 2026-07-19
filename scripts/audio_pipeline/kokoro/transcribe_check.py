"""Transcribe a clip with faster-whisper tiny to verify intelligibility."""
import sys
from faster_whisper import WhisperModel

path = sys.argv[1]
lang = sys.argv[2] if len(sys.argv) > 2 else None

model = WhisperModel("tiny", device="cpu", compute_type="int8")
segments, info = model.transcribe(path, language=lang)
text = "".join(s.text for s in segments).strip()
print(f"lang_detected={info.language} p={info.language_probability:.2f}")
print(f"transcript: {text!r}")
