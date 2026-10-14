@echo off
title AdPost Server
echo Starting AdPost local server on http://localhost:3000/...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
