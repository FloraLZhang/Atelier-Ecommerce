// # webpack.config.js
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output : {
    path: path.resolve(__dirname, "client", "dist")
  },
  module: {
    rules: [
      {
        test:  /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
    ]
  },
  devServer: {
    static: {directory: path.join(__dirname, 'client/dist')},
    open: true,
    hot: true
  },
  plugins: [
    //new HtmlWebpackPlugin({ this serves a template but we were serving it the webpack made
      //template: path.join(__dirname, "/client/dist/index.html")
    //}),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
}
