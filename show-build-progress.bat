@echo off
title Nagomi Build Dashboard
start http://localhost:8765/
cd /d "%~dp0"
node scripts\app_pipeline\dev_server.mjs
pause
