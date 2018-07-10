const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.config");
const path = require('path');

const devConfig = {
    devtool: "inline-source-map",//调试  
    mode:"development",  
    entry: {
        app: [
            'babel-polyfill',
            // 'react-hot-loader/patch',
            path.join(__dirname, 'src/index.jsx')
        ],
    },

    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能dev环境妥协*/
        filename: '[name].[hash].js',
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        // compress: true,
        historyApiFallback: true,
        port: 9000
    }
}
module.exports = merge(commonConfig, devConfig)