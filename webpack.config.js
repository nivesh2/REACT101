var webpack = require('webpack');
var path = require('path');

module.exports = exports = {
    context: path.join(__dirname,'src'),
    entry:'./app.js',
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                loader:'babel-loader',                
            }
        ]
    },
    output:{
        path:path.join(__dirname,'src/dist'),
        filename:'app.bundle.js'
    }
};