npm run build
cd dist
git add .
git commit -m "build"
git push
cd ../../
cd ccg-project-client
cd client
git pull origin build