git checkout --orphan temp
git add -A
git commit -am "📦: initial commit"
git branch -D main
git branch -m main
git remote remove origin
rm "clear_commits.sh"