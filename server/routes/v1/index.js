'use strict';

function apiRoutes (api, opts) {
  api.get('/hello', function *hello () {
    this.body = 'Hello World';
  });
}

module.exports = apiRoutes;
