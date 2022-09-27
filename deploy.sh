#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm vuepress build

# 进入生成的文件夹
cd doc/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f git@github.com:wangyue-wy/vuepresstarter.github.io.git master:gh-pages

cd -