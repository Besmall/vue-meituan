# 前言

#### 工作中用vue做了不少项目，这段时间也比较轻松，就给大家做一个用vue来模仿一个APP。刚用vue的时候，在网上搜索了一下教程，但都是一些简单的demo，但是在我们项目中都是一些交互比较复杂的电商项目，对于电商项目而言，必然会有购物车，这类项目因为涉及到money，所以对逻辑严谨度要求高。因为这类的项目好多都没人用vue来写，那么我就写一个这样的项目，希望对看到想学或者正在写此类项目的人有所帮助。

#### 想来想去也不知道做一个什么样平台或APP，看了好多平台和APP，最后选择美团APP作为练手项目，为什么选择美团来做，因为美团APP的交互方式比较炫丽，UI比较规整，功能比较齐全。

#### 该项目大大小小80多个页面，涉及注册、登录、商品展示、购物车、下单等等，是一个完整的流程。

#### 因为利用业余时间写，一直没有时间写，我先把框架打起来，有时间就一点点的加功能。

####  注：此项目纯属个人瞎搞，正常下单请选择美团官方客户端。

## 技术栈

##### vue2 + vue-cli + vuex + vue-router + vue-resource/axios + webpack + ES6/7 + fetch + sass + flex + svg + git + es6

##### ui 库
* https://github.com/youzan/vant
* http://www.muse-ui.org/#/index
* http://mint-ui.github.io/#!/zh-cn 
* https://material.io/icons/

## 说明

> 在使用前需要安装vue     npm install --global vue-cli

> 安装完以后需要安装依赖   npm install

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！

> 如果有想要从基础学习vue的朋友，这个demo可以让你了解更好的学习vue，非常适合入门练习。[地址在这里那](https://segmentfault.com/u/wujian_59939d6a3fccf/articles)

# 部分截图

### 商铺列表页

<img src="https://github.com/Besmall/vue-mt/blob/master/src/components/splb.png" width="365" height="619"/> <img src="https://github.com/Besmall/vue-mt/blob/master/src/components/splb.gif" width="365" height="619"/>


### 商铺筛选页

<img src="https://github.com/Besmall/vue-mt/blob/master/src/components/spsx.png" width="365" height="619"/> <img src="https://github.com/Besmall/vue-mt/blob/master/src/components/spsx.gif" width="365" height="619"/>

### 餐饮列表

<img src="https://github.com/Besmall/vue-mt/blob/master/src/components/canyin.png" width="365" height="619"/>

# 项目布局
```
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── mt                                         // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
|   ├── components                              // 组件
|   ├── config                                  // 基本配置
|   ├── router
│   └── router.js  
|   ├── store                                   // vuex的状态管理// 路由配置
|   └──
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
```

