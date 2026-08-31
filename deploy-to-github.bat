@echo off
setlocal enabledelayedexpansion

echo ======================================================================
echo           PathFinder AI - Universal Multi-Stream Career Engine
echo                     GitHub Repository Push Wizard
echo ======================================================================
echo.

:: Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git is not found in your PATH.
    echo Please install Git from https://git-scm.com or run:
    echo winget install Git.Git
    echo.
    pause
    exit /b 1
)

echo [1/4] Initializing Git repository...
if not exist ".git" (
    git init -b main
    echo Repository initialized on branch 'main'.
) else (
    echo Git repository already initialized.
)

echo.
echo [2/4] Staging and creating initial commit...
git add .
git commit -m "feat: complete intelligent universal multi-stream career pathway engine"

echo.
echo [3/4] Configure GitHub Remote:
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/YOUR_USERNAME/edupath-engine.git): "

if "%REPO_URL%"=="" (
    echo [WARNING] No repository URL provided. Skipping remote push.
    echo You can push manually later using:
    echo   git remote add origin YOUR_REPO_URL
    echo   git push -u origin main
    echo.
    pause
    exit /b 0
)

:: Set remote origin
git remote remove origin >nul 2>nul
git remote add origin %REPO_URL%

echo.
echo [4/4] Pushing to GitHub main branch...
git branch -M main
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================================================
    echo [SUCCESS] Code successfully pushed to GitHub!
    echo.
    echo To enable free live hosting via GitHub Pages:
    echo 1. Open your repository on GitHub.
    echo 2. Go to Settings > Pages.
    echo 3. Under 'Build and deployment' > Source, select 'GitHub Actions'.
    echo 4. Your site will automatically build and deploy within 60 seconds!
    echo ======================================================================
) else (
    echo.
    echo [NOTICE] Push encountered an issue. If you need authentication,
    echo make sure you are logged in to GitHub via 'gh auth login' or Git Credential Manager.
)

echo.
pause
