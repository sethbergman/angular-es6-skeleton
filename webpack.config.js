switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'dev':
  default:
    module.exports = require('./config/webpack.dev');
}
