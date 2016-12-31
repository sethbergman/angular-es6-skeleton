// Simple Express server for testing the production bundles prior
// to a deployment.

var express = require('express');
var fallback = require('express-history-api-fallback');
var path = require('path');

var app = express();

var port = process.env.PORT || 5000;
var publicPath = path.resolve(__dirname, 'dist');

app.use(express.static(publicPath));
app.use(fallback('index.html', { root: publicPath }));

var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
});
