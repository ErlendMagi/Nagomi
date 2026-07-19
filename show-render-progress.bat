@echo off
title Nagomi Render Progress
cd /d "%~dp0"
node scripts\audio_pipeline\progress.mjs
pause
