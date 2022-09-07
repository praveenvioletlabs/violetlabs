/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "/bundle"),
    filename: "index_bundle.js",
  },
  devServer: {
    inline: true,
    port: 8003,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Assets: path.resolve(__dirname, "./src/assets"),
      Config: path.resolve(__dirname, "./src/config"),
      Ducks: path.resolve(__dirname, "./src/ducks"),
      Pages: path.resolve(__dirname, "./src/pages"),
      Utilities: path.resolve(__dirname, "./src/utilities"),
      Images: path.resolve(__dirname, "./src/assets/images"),
      Hooks: path.resolve(__dirname, "./src/hooks"),
      Constants: path.resolve(__dirname, "./src/config/constants.js"),
      CommonStyles: path.resolve(__dirname, "./src/components/common.style.js"),
      Theme: path.resolve(__dirname, "./src/config/theme.js"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
