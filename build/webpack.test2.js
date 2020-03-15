const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')
// const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/test.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9090
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                '@babel/transform-runtime',
                {
                  "absoluteRuntime": false,
                  "corejs": 3,
                  "helpers": false,
                  "regenerator": false,
                  "useESModules": false,
                }
              ]
            ]
            }
          }
        ]
      }
    ]
  }
})