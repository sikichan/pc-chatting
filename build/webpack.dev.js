const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].[hash:6].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
  watch: true, // 实时编译
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,// 防抖
    ignored: /node_modules/ 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 开发环境下使用 vue-style-loader 自动完成热模块替换(HMR)
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer') // 自动生成浏览器前缀, 根据package.json的browserslist
              ]
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer') // 自动生成浏览器前缀, 根据package.json的browserslist
              ]
            }
          },
          'less-loader'
        ]
      },
    ]
  }
})