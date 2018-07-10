const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const commonConfig = {
    entry: './src/index.jsx',
    // output: {
    //   filename: 'bundle.js',
    //   path: path.resolve(__dirname, 'dist')
    // },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].js",
        publicPath: "/"
    },
    plugins: [
      //
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join(__dirname, 'src/index.html')
      }),
      // new webpack.HashedModuleIdsPlugin(),
      // //公共库缓存
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'vendor'
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'runtime'
      // }),
  ],
};
module.exports = commonConfig;