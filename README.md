

##项目已有功能

1、包括了一些组件
   简单select，可查询的select，穿梭框，上传图片等，具体见components目录下   
2、路由配置
   使用vue-router,具体见router目录下   
3、请求配置
   ①由于vue2.0版，停止维护vue-resource，作者推荐使用axios（本项目使用的也是axios），具体见request目录下；   
   ②由于ajax不支持跨域，有需要用到代理（proxyTable）的同学配置见config/index.js；   
   ③使用到body-parser中间件对post参数进行解析，配置见bulid/dev-server.js    
4、状态管理配置
   使用vuex,具体见store目录下    

##前端框架(vue)学习手册

1、vue:https://cn.vuejs.org (熟悉框架特点)    
2、vue-cli:https://github.com/vuejs/vue-cli (学会使用vue-cli,webpack模式下,创建出来的,项目demo)    
3、element-ui:http://element.eleme.io/#/zh-CN/component/installation (学会使用组件-本例是饿了么的组件)    
4、es6语法:http://es6.ruanyifeng.com (简单了解)    

##一些资料

1、代理相关：http://blog.csdn.net/u012857153/article/details/71403530     
2、.babelrc配置文件（）：http://www.tuicool.com/articles/rA7Vjiz    
3、bodyParse和qs：http://www.cnblogs.com/wuqun/p/5942918.html    
                 http://blog.csdn.net/sinat_25127047/article/details/50596905     
4、axios:https://github.com/mzabriskie/axios     
5、路由拦截：http://www.tuicool.com/articles/JRJFN3N     
6、图片上传：http://blog.csdn.net/swingpyzf/article/details/20230865    
            https://segmentfault.com/q/1010000007566567    
7、项目中用到的豆瓣api：https://developers.douban.com/wiki/?title=movie_v2#subject    
8、vue-router官方文档：https://router.vuejs.org/zh-cn/    
9、webpack配置篇：http://www.cnblogs.com/brandonhulala/p/6057378.html（vue1.0）    
                 http://www.cnblogs.com/brandonhulala/p/6120078.html（vue2.0的一些不同）
                 http://www.cnblogs.com/lhweb15/p/5660609.html(vue2.0)
## Build Setup（项目启动）

npm和cnpm
vue官网例子提供的是npm，但是由于在国内，推荐使用淘宝镜像（本项目使用的也是淘宝镜像）    

安装方法：
1、安装node.js(http://www.runoob.com/nodejs/nodejs-install-setup.html)    
2、基于node.js,利用淘宝npm镜像安装相关依赖    
``` bash
# replace npm with cnpm
npm install -g cnpm –-registry=https://registry.npm.taobao.org
```
之后所有命令的npm都用cnpm来替代即可    

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8090
cnpm run dev

# build for production with minification
cnpm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
