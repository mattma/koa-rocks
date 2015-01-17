require('co-mocha');

var app = require('../../main');
var options = {
  port:       9876,
  env:        'test',
  liveReload: false
};
var server = app(options);

module.exports = {
  request: require('co-supertest'),
  server: server
};
