包括了一些组件（简单select，可查询的select，穿梭框，上传图片等，具体见components目录下）
路由配置（使用vue-router,具体见router目录下）
请求配置（由于vue2.0版，停止维护vue-resource，这里使用的axios,具体见request目录下；由于ajax不支持跨域，有需要用到代理的同学配置见config/index）
状态管理配置（使用vuex,具体见store目录下）


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
