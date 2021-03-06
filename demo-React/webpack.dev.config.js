const path  = require('path');
module.exports = {
  // server
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    open: true
  },
  // 入口 把两个不相干的文件打包成一个js
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  // 输出
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [{
      test: /.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }],
    // rules: [{
    //   test: /.scss$/,
    //   use: ['style-loader'],
    //   include: path.join(__dirname, 'src')
    // }]
  },
  resolve: {
    alias: {
      '@page': path.join(__dirname, 'src/page'),
      '@component': path.join(__dirname, 'src/component'),
      '@router': path.join(__dirname, 'src/router'),
      '@reducers': path.join(__dirname, 'src/redux/reducers'),
      '@actions': path.join(__dirname, 'src/redux/actions'),
    }
  }
}