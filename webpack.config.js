const path = require('path');
const webpack = require('webpack');

/* if babel transciber doesn't work try below:
  main: ['babel-polyfill',
        './public/js/main.js'],
*/
const entryPoint = {
  main: './public/js/main.js'
};

module.exports = {
  entry: entryPoint,
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    }]
  }
}
