var server = require('../../helper/entrypoint').server;
var request = require('../../helper/entrypoint').request;

describe('User module', function () {
  var agent;

  before(function *() {
    agent = request.agent(server.listen());
  });

  after(function (){
    server.server.close();
  });

  it('GET /api/users', function *() {
    var users = yield agent.get('/api/users').expect(200).end();
    console.log('users: ', users.text);
  });
});
