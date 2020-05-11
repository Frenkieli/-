const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const path = require('path');


const config = {
  mode: 'production',
  devtool: 'null',
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname + "/app/index.temp.html")//new 一个这个插件的实例，并传入相关的参数
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css"),  // 目前還不能支元到webpack 4之後的版本 所以要安專到最新版 extract-text-webpack-plugin@next
    new CleanWebpackPlugin({
      root: __dirname,
      verbose: true,
      dry: false
    })
  ],
  optimization: {
    minimize: true  // 用來混淆生成的程式碼
  }
}


module.exports = merge(commonConfig, config);