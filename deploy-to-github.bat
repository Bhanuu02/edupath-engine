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

echo [1/4] Initializing / checking Git repository...
if not exist ".git" (
    git init -b main
    echo Repository initialized on branch 'main'.
) else (
    echo Git repository detected.
)

echo.
echo [2/4] Staging and creating commit for all enhanced features...
git add .
git commit -m "feat: add post-degree & civil services exams, VLSI/photography pathways, branch choices, 3D spatial mode, and animated AI scanner"

echo.
echo [3/4] Checking remote origin...
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% neq 0 (
    set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/Bhanuu02/edupath-engine.git): "
    if not "!REPO_URL!"=="" (
        git remote add origin !REPO_URL!
    )
)

echo.
echo [4/4] Pushing changes to GitHub main branch...
git branch -M main
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================================================
    echo [SUCCESS] Code successfully pushed to GitHub!
    echo Vercel will automatically detect the new commit and redeploy cleanly.
    echo ======================================================================
) else (
    echo.
    echo [NOTICE] Push encountered an issue. If needed, push with:
    echo   git push -u origin main
)

echo.
pause
