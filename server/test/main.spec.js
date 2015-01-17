var server = require('./helper/entrypoint').server;
var request = require('./helper/entrypoint').request;

describe('Main module', function () {
  var agent;

  before(function *() {
    agent = request.agent(server.listen());
  });

  it('should kick start the web server', function *() {
    yield agent
      .get('/')
      .expect(200)
      .end();
  });
});
