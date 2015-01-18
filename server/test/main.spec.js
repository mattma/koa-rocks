var server = require('./helper/entrypoint').server;
var request = require('./helper/entrypoint').request;

describe('Main module', function () {
  var agent;

  before(function () {
    agent = request.agent(server.listen());
  });

  after(function (){
    server.server.close();
  });

  it('should kick start the web server', function *() {
    agent
      .get('/')
      .expect(200)
      .end();
  });
});
