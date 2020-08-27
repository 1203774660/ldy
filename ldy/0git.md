# 本地仓库
    git init

# ssh盾

    ssh-keygen -t rsa

    默认生成目录
    c:/sers/用户名字/.ssh

    id_rsa私钥
    id_rsa.pub公钥---
    复制公钥
# 建立本地库和远程库
    1 连接
    $ git remote add origin git@github.com:1203774660/ldy.git
    git remote add origin https://github.com/1203774660/ldy.git
    2 本地库推送
    git push -u origin master
    +yes
    3移除之前连接的远程库
    git remote rm origin



    
1、 在github上创建项目
2、 使用$ git clone https://github/xx账号/xx项目.git克隆到本地
3、 编辑项目
4、 $ git add .(将改动添加到暂存区)
5、 $ git commit –m”提交说明”
6、 $ git push origin 将本地更改推送到远程master分支

#下拉
    git clone git@github.com:1203774660/ldy.git


##  建立新的分支

    git checkout -b 分支名称
    
    git checkout 分支名  如果不加-b就是切换分支
##  合并分支

    git merge 分支名称
##  将本地分支提交到线上

    git push -u origin 线上的分支名称
    
##  将线上的某个分支合并到本地当前分支

    git pull origin master