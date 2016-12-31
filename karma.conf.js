module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [{ pattern: './spec.bundle.js', watched: false }],
    exclude: [],
    preprocessors: { './spec.bundle.js': ['webpack', 'sourcemap'] },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
          { test: /\.html$/, loader: 'raw' },
        ],
      },
    },
    webpackServer: {
      noInfo: true,
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};
