const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");
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
              // there should be 1 cpu for the fork-ts-checker-webpack-plugin
              workers: require("os").cpus().length - 1,
            },
          },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation
                                   // and reduce errors reported to webpack
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ForkTsCheckerWebpackPlugin(
      {
        checkSyntacticErrors: true,
        tslint: true,
        workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
      },
    ),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      title: "EZGameEngine",
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
