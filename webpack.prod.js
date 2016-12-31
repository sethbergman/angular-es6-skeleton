// const path = require('path');
// const webpackMerge = require('webpack-merge');
// const commonConfig = require('./webpack.common.js');
// const Webpack = require('webpack');
//
// // webpack plugins
// const WebpackMd5Hash = require('webpack-md5-hash');
// const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
// const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
//
// module.exports = webpackMerge(commonConfig, {
//   debug: false,
//   devtool: 'source-map',
//   output: {
//     path: path.join(__dirname, '..', 'dist'),
//     filename: '[name].[chunkhash].bundle.js',
//     sourceMapFilename: '[name].[chunkhash].bundle.map',
//     chunkFilename: '[id].[chunkhash].chunk.js',
//   },
//   plugins: [
//     new WebpackMd5Hash(),
//     new Webpack.optimize.OccurenceOrderPlugin(),
//     new DedupePlugin(),
//     new UglifyJsPlugin({
//       minimize: true,
//       sourceMap: true,
//       mangle: {
//         except: [
//           'exports',
//           'require',
//         ],
//       },
//     }),
//   ],
// });



var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  })
]);

module.exports = config;
