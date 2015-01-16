// Entry point of all routes
var route = require('koa-router');
// var parse = require('co-body');

var rootRoute = require('./root');
var fakeUsersRoute = require('./api/mock-users');

module.exports = function routes (app, options) {
  // add HTTP methods to app object properties
  app.use(route(app));

  // Need to be deleted in development
  // GET mocks data from /server/routes/mocks/people.json
  app.get('/api/:query', fakeUsersRoute);

  // root route to loads view templates
  app.get('(.*)', rootRoute(options));
};
