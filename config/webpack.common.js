const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'angular-es6-skeleton',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
  ],
  module: {
    loaders: [
      // expose angular via window.angular
      { test: require.resolve('angular'), loader: 'expose?angular' },
      { test: /\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
      { test: /\.html$/, loader: 'raw' },
    ],
  },
  resolve: {
    root: [
      path.resolve('./src'),
    ],
    modulesDirectories: [
      'node_modules',
    ],
  },
};
