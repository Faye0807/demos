const path = require('path');
// HTML模板动态引入bundle文件
const htmlWebpackPlugin = require('html-webpack-plugin');
// 打包前删除之前生成的打包文件
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports =  {
  // mode: 'development',
  // entry: {
  //   a: path.join(__dirname, './src/app.js')
  // },
  entry: [path.join(__dirname, './src/app.js')],
  output: {
    path: path.join(__dirname, '/dist'),
    // name 对应入口名字 如上为a 而非打包文件的名字；如果没有entry入口名字 则默认为main
    // chunkhash 打包块的哈希值 如果文件未发生变化 则下次构建时 哈希值是不会变化的
    // hash本次构建的哈希值 每次构建的哈希值都不一样
    filename: 'js/[name]-[chunkhash].js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: path.join(__dirname, '/node_modules/'),
        include: path.join(__dirname, './src/'),
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin({
      verbose: true
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ]
}