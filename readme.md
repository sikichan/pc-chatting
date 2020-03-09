```js
// 手动配置 webpack , version 4
yarn init -y
yarn add --dev webpack webpack-cli webpack-merge
yarn add --dev html-webpack-plugin clean-webpack-plugin
yarn add --dev webpack-dev-server

// 处理图片
yarn add --dev file-loader url-loader
// 处理预编译语言
yarn add --dev less less-loader
yarn add --dev node-sass sass-loader
// 处理 es6 syntax
yarn add --dev @babel/core @babel/preset-env babel-loader
// 处理 es6 api 需要配合 babel 配置文件 
yarn add --dev @babel/plugin-transform-runtime  @babel/runtime
// 模拟一个完整的es2015+环境，用于应用程序的开发
@babel/polyfill
// 模拟一个完整的es2015+环境，用于库
@babel/transform-runtime
// 处理 css
yarn add --dev css-loader
// 提取 css
yarn add --dev mini-css-extract-plugin
// 处理 vue
yarn add vue
yarn add --dev vue-loader vue-template-compiler
// 处理 style 标签或 vue 单文件的 <style> 块
yarn add --dev style-loader vue-style-loader
// 给 css 加上浏览器前缀
yarn add --dev postcss-loader autoprefixer

```

## 转译 es6 三种方案
### 方案1 
```js
yarn add core-js@3
yarn add --dev @babel/preset-env
// 配置见 webpack.test.js babel-loader > options
app.bundle.js    189 KiB
```

### 方案2
```js
yarn add babel-runtime @babel/transform-corejs3 
yarn add --dev @babel/plugin-transform-runtime
// 配置见 webpack.test2.js babel-loader > options
app.bundle.js    268 KiB 
```
