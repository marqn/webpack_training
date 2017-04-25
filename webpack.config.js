var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMiddleware = require("webpack-dev-middleware");

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
        ]

};
