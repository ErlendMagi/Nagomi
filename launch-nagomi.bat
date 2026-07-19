@echo off
title Nagomi
cd /d "%~dp0"

rem ─── Check Node ──────────────────────────────────────────────────────────────
where node >nul 2>nul
if errorlevel 1 (
    echo Node.js not found in PATH. Install from https://nodejs.org/
    pause
    exit /b 1
)

rem ─── First-run setup: npm install + build bundle + generate audio ───────────
if not exist "node_modules\msedge-tts" (
    echo First-time setup: installing dependencies. This takes 1-3 minutes...
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        echo npm install failed.
        pause
        exit /b 1
    )
)

if not exist "src\data\conversations_v2.js" (
    echo Building conversations bundle...
    call npm run build:bundle
    if errorlevel 1 (
        echo Bundle build failed.
        pause
        exit /b 1
    )
)

if not exist "audio\conv_00001\intro_en.mp3" (
    echo Generating audio for 23 conversations via Edge TTS. This takes ~1-2 minutes...
    call npm run gen:audio
    if errorlevel 1 (
        echo Audio generation failed. Will fall back to browser TTS.
    )
)

rem ─── Launch ──────────────────────────────────────────────────────────────────
echo Starting Nagomi...
node launch.mjs

pause
