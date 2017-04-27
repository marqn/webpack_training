var webpack = require('webpack');
var path = require('path');


module.exports = {
    context: path.resolve(__dirname, 'app'),

    entry: './index.js',
    
    output: {
        path: __dirname + '/app',
        filename: '../bundle.js'
    }
};