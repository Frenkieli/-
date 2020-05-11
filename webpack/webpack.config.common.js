const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname + "/app/main.js"),//已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname + "/build"),//打包后的文件存放的地方
    filename: "bundle-[hash].js"//打包后输出文件的文件名
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     "env", "react"
          //   ]
          // }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]' // 指定css的类名格式
              }, // 指定启用css modules
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  resolve:{
    alias: {
      '@@' : './css'
    },
    extensions: [
      ".webpack.js",
      ".web.js",
      ".js",
      '.css',
      '.json'
    ]
  },
  plugins: [
    // new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.temp.html"//new 一个这个插件的实例，并传入相关的参数
    }),
  ],
}