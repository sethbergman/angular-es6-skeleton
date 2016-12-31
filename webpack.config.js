switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./webpack.prod');
    break;
  case 'dev':
  default:
    module.exports = require('./webpack.dev');
}
