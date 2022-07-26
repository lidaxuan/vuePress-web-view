###
 # @Description: 
 # @Author: 李大玄
 # @Date: 2022-07-22 14:55:46
 # @FilePath: /vuePress-web-view/deploy.sh
 # @LastEditors: 李大玄
 # @LastEditTime: 2022-07-22 20:45:32
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lidaxuan/vuePress-web-view.git master:gh-pages


cd -