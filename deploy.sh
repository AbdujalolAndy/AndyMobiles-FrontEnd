# !bin/bash

# PRODUCTION
git reset --hard
git pull origin master

npm i yarn -g
yarn
yarn run build
pm2 start "serve -s build" --name=ANDYMOBILE-REACT

# DEVELOPMENT
# npm i yarn -g
# pm2 start "yarn run start" --name=ANDYMOBILE-REACT