var koa = require('koa');
var logger = require('koa-logger');

var hbs = require('./middlewares/view-hbs');
var serve = require('./middlewares/serve-public');
var routes = require('./routes');

var app = koa();

module.exports = function main (options) {
  app.use(logger());

  // Setup views, use extension ".hbs"
  app.use(hbs());
  app.use(serve());

  // load up all possible routes
  routes(app, options);

  app.listen(options.port);
  console.log('Starting web server on port ' + options.port + ' in ' + options.env + ' mode');
};
