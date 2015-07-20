'use strict';

// Entry point of all routes
let Router = require('koa-router');
let render = require('../middleware/render');

let router = new Router();
let currentAPI = new Router({
  prefix: `/api/v1`
});

function rootRoute (opts) {
  return function *rootRoute () {
    this.body = yield render('index');
  };
}

module.exports = function routes (app, opts) {
  let v1 = require('./v1');

  // add HTTP methods to app object properties
  // "/api/*": an API end point, interact with db
  v1(currentAPI, opts);
  app.use(currentAPI.routes());

  router.get('(.*)', rootRoute(opts));
  app.use(router.routes());
};
