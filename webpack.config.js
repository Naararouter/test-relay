const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: "./src/index.tsx",
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".tsx", ".graphql"],
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
  },

  node: {
    fs: "empty",
    module: "empty",
  },

  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /(?<!(query))\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.query\.ts/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.ts(x?)$/,
        loader: "source-map-loader",
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: "My App",
      template: "src/index.html",
    }),
  ],
};
