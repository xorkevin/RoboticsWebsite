'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: './js/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: APP
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/,loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
}
