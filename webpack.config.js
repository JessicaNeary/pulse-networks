const webpack = require("webpack");

module.exports = {
  entry: "./client/index.js",
  devServer: {
    hot: true,
    historyApiFallback: "public/index.html"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: "./public",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        loaders: ["babel-loader", "react-svg-loader"],
        options: {
          jsx: true
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devtool: "source-map"
};
