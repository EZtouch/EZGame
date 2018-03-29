const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CacheLoader = require("cache-loader");
const ThreadLoader = require("thread-loader");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  entry: {
    app: "./src/index.ts",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          { loader: "cache-loader" },
          {
            loader: "thread-loader",
            options: {
              workers: require("os").cpus().length - 1,
            },
          },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(
      {
        checkSyntacticErrors: true,
        tslint: true,
      },
    ),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      title: "EZGame",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
