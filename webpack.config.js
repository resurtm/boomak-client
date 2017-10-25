const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    path: path.join(__dirname, 'public', 'bundle'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|gif|jpg|jpeg|woff|woff2|eot|ttf)$/,
        use: {loader: 'url-loader?limit=4000'}
      },
      {
        test: /\.js$/,
        use: {loader: 'babel-loader'},
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.vue$/,
        use: {loader: 'vue-loader'}
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};

module.exports = config;
