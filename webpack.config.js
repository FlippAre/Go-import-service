var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';
var ExtractPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new ExtractPlugin('bundle.css') // <=== where should content be piped
];

module.exports = {
  entry:  './web/dev/js',
  output: {
      path:     './web/builds',
      filename: 'bundle.js',
  },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:   /\.css/,
                loaders: ExtractPlugin.extract('style', 'css!sass'),
            },

        ],
    }
};
