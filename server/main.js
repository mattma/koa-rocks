var koa = require('koa');
var logger = require('koa-logger');
var responseTime = require('koa-response-time');
var compress = require('koa-compress');

var hbs = require('./middleware/view-hbs');
var serve = require('./middleware/serve-public');
var routes = require('./routes');

/**
 * Initialize an app with the given `opts`.
 *
 * @param {Object} opts
 * @return {Application}
 * @api public
 */
module.exports = function main (opts) {
  opts = opts || {};
  var app = koa();

  // Middleware starts

  // logging
  if (opts.env !== 'test') {
    app.use(logger());
  }

  // x-response-time
  app.use(responseTime());

  // compression
  app.use(compress());

  // setup views, use extension ".hbs"
  app.use(hbs());

  // serve static files, ex: js, css, images, etc
  app.use(serve());

  // load up all possible routes
  routes(app, opts);

  // kick start web server, enable `app.server.close()` to shut down
  app.server = app.listen(opts.port);
  console.log('Starting web server on port %s in %s mode', opts.port, opts.env);

  return app;
};
