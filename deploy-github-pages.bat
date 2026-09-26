@echo off
echo ==============================================
echo   Deploying HappyBirthDayEmBe to GitHub Pages
echo ==============================================

REM 1. Get current git remote
for /f "tokens=*" %%i in ('git remote get-url origin') do set REMOTE_URL=%%i

REM 2. Build for GitHub Pages
call npm run build -- --configuration=production --base-href="/HappyBirthDayEmBe/"

REM 3. Copy 404.html and .nojekyll
copy /y 404.html dist\happy-birthday-em-be\browser\
copy /y .nojekyll dist\happy-birthday-em-be\browser\

REM 4. Deploy isolated dist to gh-pages branch
cd dist\happy-birthday-em-be\browser
git init
git add -A
git commit -m "Deploy HappyBirthDayEmBe to GitHub Pages"
git remote add origin %REMOTE_URL% 2>nul
git push -f origin master:gh-pages
cd ..\..\..

echo.
echo ==============================================
echo   Deployment Complete!
echo   Website URL: https://mquun2005.github.io/HappyBirthDayEmBe/
echo ==============================================
pause
