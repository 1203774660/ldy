# 本地仓库
    git init

# ssh盾

    ssh-keygen -t rsa

    默认生成目录
    c:/sers/用户名字/.sh

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

#下拉
    git clone git@github.com:1203774660/ldy.git