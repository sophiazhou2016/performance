# 一：vue 2.0 的一些用法回顾
## a)mixin ：页面的风格不同，但是执行的方法和需要的数据类似，我们是选择每个都写呢还是提取出公共部分呢
> https://segmentfault.com/a/1190000015698391
## b)函数式组件
> https://juejin.im/post/6844903630575763470
### 函数式组件没有实例，事件只能由父组件传递。下面我们在App.vue上定义一个最简单的click事件
## c)slots
> https://juejin.im/post/6844903817746628615

## Javascript设计模式之观察者模式
> https://juejin.im/post/6844903698154389517

### a)什么是观察者模式？(发布-订阅者模式)
```js
    document.querySelector('#btn').addEventListener('click',function () {
        alert('You click this btn');
    },false)
    // 对DOM的事件绑定就是一个非常典型的发布-订阅者模式
```
### b)vue框架也使用了这种模式
![](https://user-gold-cdn.xitu.io/2018/10/23/166a031209fc8da5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
> 代码见 src => test => observe.html

# 二：vue 3.0的初体验
## a) setup 
> https://www.cnblogs.com/jinzhenzong/p/12778729.html

## b) proxy
### 基础概念
> src => test => proxy.js
```js
// ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。
var proxy = new Proxy(target, handler);
// Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
```
### ES6 中 Proxy 目前提供了 13 种可代理操作：get, set, apply(target 必须是一个函数), construct(new), has(in), 

### vue 3.0 双向数据绑定
> 见src => test => proxy.html

## c) 重新设计应用程序和全局API
```js
    // before
    import Vue from 'vue'
    import App from './App.vue'

    Vue.config.ignoredElements = [/^app-/]
    Vue.use(/* ... */)
    Vue.mixin(/* ... */)
    Vue.component(/* ... */)
    Vue.directive(/* ... */)

    Vue.prototype.customProperty = () => {}

    new Vue({
    render: h => h(App)
    }).$mount('#app')
```
```js
    // now
    import { createApp } from 'vue'
    import App from './App.vue'

    const app = createApp(App)

    app.config.isCustomElement = tag => tag.startsWith('app-')
    app.use(/* ... */)
    app.mixin(/* ... */)
    app.component(/* ... */)
    app.directive(/* ... */)

    app.config.globalProperties.customProperty = () => {}

    app.mount(App, '#app')
```
## d) vue 3.0 如何使用vue-router
> router.js
```js
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'

const routes = [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
  
export default router
```
```js
const app = createApp(App);
app.use(router) // 这样使用
app.mount('#app')
```
> https://juejin.im/post/6844904150157754376

# 三、从0到1 搭建webpack 
> https://juejin.im/post/6844904035728932878
## entry
## output
## module
## loader
### 1) test: 匹配处理文件的扩展名的正则表达式
### 2) use: loader 名称，就是你要使用模块的名称
> 要注意的是配置多个 loader 是 有顺序 的，webpack 会安装配置的 loader 顺序 从右向左 执行的，配置的时候要格外注意！
### 3) include / exclude : 手动指定必须处理的文件夹活屏蔽不需要处理的文件夹
### 4) query: 为loaders 提供额外的设置选项
## 配置开发服务器
## plugins 是一个数组，new 一个插件
## 模块加载loader file-loader url-loader
## 自动生成html文件
## css less sasss
## css 分割
## 处理css3属性前缀 postcss autoprefixer
## 转义 ES6/ES7
> babel-loader只是告诉了 webpack 怎么处理 ES6，ES7 代码，但它并不会将 ES6，ES7 代码翻译成向后兼容版本的代码，因此需要指定一个 preset，它包含了代码转换的规则
```js
// .babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions"
          ]
        },
        "debug":true //调试使用
      }
    ]
  ]
}

```
>  npm install babel-loader @babel/core @babel/preset-env -D
> 然而转换的并不彻底 我们还需要 babel 提供的另一个工具—— polyfill
> 然而默认情况下会被添加到每一个需要它的文件中，并且会全局注入，造成全局污染，如果我们在开发框架之类的，可能会发生冲突
> npm install @babel/runtime @babel/plugin-transform-runtime -D安装
```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions"
          ]
        },
        "debug":true //调试使用
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": true
      }
    ]
  ]
}

```
## 拷贝静态文件
## 打包前清空  npm install clean-webpack-plugin -D
## 服务器代理
> 如果是https接口，需要配置 secure 这个参数 为 true ，如果接口跨域，需要配置changeOrigin这个参数为 true
## 压缩