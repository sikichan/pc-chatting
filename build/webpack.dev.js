const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
})