@echo off
echo ==============================================
echo   Deploying HappyBirthDayEmBe to GitHub Pages
echo ==============================================

REM 1. Build for GitHub Pages
call npm run build -- --configuration=production --base-href="/HappyBirthDayEmBe/"

REM 2. Copy 404.html and .nojekyll
copy /y 404.html dist\happy-birthday-em-be\browser\
copy /y .nojekyll dist\happy-birthday-em-be\browser\

REM 3. Deploy to gh-pages branch
git --work-tree=dist/happy-birthday-em-be/browser checkout --orphan gh-pages
git --work-tree=dist/happy-birthday-em-be/browser add --all
git commit -m "Deploy HappyBirthDayEmBe to GitHub Pages"
git push -f origin gh-pages
git checkout -f main

echo.
echo ==============================================
echo   Deployment Complete!
echo   Website URL: https://mquun2005.github.io/HappyBirthDayEmBe/
echo ==============================================
pause
