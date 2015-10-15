'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

var nodedir = __dirname + '/node_modules'

var config = {
  context: APP,
  entry: {
    app: './js/main.js'
  },
  resolve: {alias: {}},
  output: {
    filename: 'bundle.js',
    path: APP
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}

module.exports = config;
