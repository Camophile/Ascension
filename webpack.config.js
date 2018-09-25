const path = require('path');
const webpack = require('webpack');

/* if babel transciber doesn't work try below:
  main: ['babel-polyfill',
        './site/js/main.js'],
*/
const entryPoint = {
  main: './site/public/scripts/main.js'
};

module.exports = {
  entry: entryPoint,
  output: {
    path: path.join(__dirname, 'site/dist'),
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
