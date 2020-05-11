const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config.common.js');

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname + "/build"), //本地服务器所加载的页面所在的目录
    // historyApiFallback: true, //history模式
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],
}


module.exports = merge(commonConfig, config);