@echo off
rem Agent Builder Track launcher (Windows: CMD or PowerShell).
rem Starts Claude Code in this folder with the tutor already running.
rem
rem   study              what to study next
rem   study 2.3          concept check on lesson 2.3
rem   study phase 2      checkpoint across phase 2
rem   study final        mixed check across everything
rem   study ask 3.4 why does stdio serve one client?
rem   study app          open the study app in your browser
rem   study update       get the latest lessons
rem
rem In PowerShell, type .\study instead of study.

setlocal
cd /d "%~dp0"
set "ARGS=%*"

if /i "%~1"=="app" ( start "" "%~dp0index.html" & goto :eof )
if /i "%~1"=="update" ( git pull & goto :eof )
if /i "%~1"=="help" ( findstr /b /c:"rem " "%~f0" & goto :eof )

where claude >nul 2>nul
if errorlevel 1 goto :install

if "%~1"=="" ( claude "/next" & goto :eof )
if /i "%~1"=="ask" ( claude "/ask %ARGS:~4%" & goto :eof )
claude "/check %ARGS%"
goto :eof

:install
echo.
echo Claude Code isn't installed yet. One-time setup:
echo.
echo   1. Install it. In PowerShell:
echo        irm https://claude.ai/install.ps1 ^| iex
echo      Or in CMD:
echo        curl -fsSL https://claude.ai/install.cmd -o install.cmd ^&^& install.cmd ^&^& del install.cmd
echo   2. Open a NEW terminal window, come back to this folder, and run study again.
echo      The first time, Claude Code asks you to sign in with your Claude account.
echo.
echo Claude Code needs a paid Claude plan (Pro or higher); the free plan doesn't include it.
echo No paid plan? Run "study app" to use the study app, and its "Open in the Claude app" button.
echo.
exit /b 1
