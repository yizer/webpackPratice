const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 自动跟踪文件
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 清除无效文件
const webpack = require("webpack");
module.exports = {
  //   entry: "./src/index.js",
  // 入口
  entry: {
    app: "./src/index.js"
  },
  mode: "production",
  // 插件
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.NamedModulesPlugin(), //更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin() // 热替换
  ],
  //web服务器
  devServer: {
    contentBase: "./dist", // 可访问文件目录
    hot: true // 热替换
  },

  // 输出
  output: {
    //   filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/" //确保文件资源能够在 http://localhost:3000
  },
  devtool: "inline-source-map", // 地图,用来调试
  // 引入的文件解析器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
