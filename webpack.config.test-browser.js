// This is a Webpack 2 configuration file
const {resolve} = require('path');
// const webpack = require('webpack');

module.exports = {
  devServer: {
    stats: {
      warnings: false
    },
    quiet: true
  },

  // Bundle the tests for running in the browser
  entry: {
    'test-browser': resolve('./test/browser.js')
  },

  // Generate a bundle in dist folder
  output: {
    path: resolve('./dist'),
    filename: '[name]-bundle.js'
  },

  devtool: '#source-maps',

  resolve: {
    alias: {
      'luma.gl': resolve('./src')
    }
  },

  module: {
    rules: [
      {
        include: [resolve('./src')],
        loader: 'transform-loader',
        options: 'brfs-babel'
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins: []
};
