const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      // 'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.runtime.esm.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于 8kb 的图片转成 base64 url
              fallback: require.resolve('file-loader')
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        exclude: file => (
          /(node_modules|bower_components)/.test(file) &&
          !/\.vue\.js/.test(file)
          ),
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env',
                {
                  targets: {
                    esmodules: true
                  },
                  useBuiltIns: "usage",
                  corejs: 3
                }
              ]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      title: process.env.NODE_ENV
    }),
    new VueLoaderPlugin(),
  ]
}