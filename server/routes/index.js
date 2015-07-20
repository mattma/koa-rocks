'use strict';

// Entry point of all routes
let Router = require('koa-router');

let currentAPI = new Router({
  prefix: `/api/v1`
});

module.exports = function routes (app, opts) {
  let v1 = require('./v1');
  let rootRoute = require('./root');

  // add HTTP methods to app object properties

  // "/api/*": an API end point, interact with db
  v1(currentAPI, opts);

  // root route to loads view templates
  rootRoute(currentAPI, opts);

  app.use(currentAPI.routes());
};
