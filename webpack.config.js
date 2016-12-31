// switch (process.env.NODE_ENV) {
//   case 'prod':
//     module.exports = require('./config/webpack.prod');
//     break;
//   case 'dev':
//   default:
//     module.exports = require('./config/webpack.dev');
// }

// const webpack = require('webpack');
//
// var config = {
//   entry: './src/app.js',
//   output: {
//     path: __dirname + '/dist',
//     filename: 'bundle.js'
//   },
//
//   plugins: [
//     new webpack.DefinePlugin({
//       ON_TEST: process.env.NODE_ENV === 'test'
//     })
//   ],
//
//   module: {
//     loaders: [
//       {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
//       {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
//       {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
//       {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
//     ]
//   }
// };
//
// if (process.env.NODE_ENV === 'production') {
//   config.output.path = __dirname + '/dist';
//   config.plugins.push(new webpack.optimize.UglifyJsPlugin());
//   config.devtool = 'source-map';
// }
//
// module.exports = config;


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '..', 'dist'),
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
