#!/bin/bash
ng build --configuration=production --base-href="/HappyBirthDayEmBe/"
cp 404.html dist/happy-birthday-em-be/browser/
cp .nojekyll dist/happy-birthday-em-be/browser/
git --work-tree=dist/happy-birthday-em-be/browser checkout --orphan gh-pages
git --work-tree=dist/happy-birthday-em-be/browser add --all
git commit -m "Deploy HappyBirthDayEmBe to GitHub Pages"
git push -f origin gh-pages
git checkout -f main
echo "Deployed to https://mquun2005.github.io/HappyBirthDayEmBe/"
