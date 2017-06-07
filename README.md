##项目已有功能

1、包括了一些组件（简单select，可查询的select，穿梭框，上传图片等，具体见components目录下）
2、路由配置（使用vue-router,具体见router目录下）
3、请求配置（由于vue2.0版，停止维护vue-resource，这里使用的axios,具体见request目录下；由于ajax不支持跨域，有需要用到代理的同学配置见config/index）
4、状态管理配置（使用vuex,具体见store目录下）

##前端框架(vue)学习手册

1、vue:https://cn.vuejs.org (熟悉框架特点)
2、vue-cli:https://github.com/vuejs/vue-cli (学会使用vue-cli,webpack模式下,创建出来的,项目demo)
3、element-ui:http://element.eleme.io/#/zh-CN/component/installation (学会使用组件-饿了么的组件)
4、es6语法:http://es6.ruanyifeng.com (简单了解)

##一些资料

1、代理相关：http://blog.csdn.net/u012857153/article/details/71403530 
2、.babelrc配置文件（）：http://donglegend.com/2016/11/24/vue2-vuex2%E7%9A%84%E9%82%A3%E7%82%B9%E5%9D%91/?utm_source=tuicool&utm_medium=referral 
3、bodyParse和qs：http://www.cnblogs.com/wuqun/p/5942918.html http://blog.csdn.net/sinat_25127047/article/details/50596905 
4、axios:https://github.com/mzabriskie/axios 
5、路由拦截：http://www.tuicool.com/articles/JRJFN3N 
6、图片上传：http://blog.csdn.net/swingpyzf/article/details/20230865 https://segmentfault.com/q/1010000007566567

## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8090
cnpm run dev

# build for production with minification
cnpm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
