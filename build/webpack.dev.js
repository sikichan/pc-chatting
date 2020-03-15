const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true // 开启 CSS Modules
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true // 开启 CSS Modules
            }
          },
          'less-loader'
        ]
      },
    ]
  }
})