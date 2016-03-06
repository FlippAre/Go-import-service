var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';
var ExtractPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry:  './web/dev/index.js',
  output: {
      path:     './web/assets',
      publicPath: "/assets/",
      filename: 'bundle.js'
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
                loader: ExtractPlugin.extract('style', 'css!sass'),
            },

        ],
      },
      plugins: [
            new ExtractPlugin('bundle.css') // <=== where should content be piped
      ]
};
