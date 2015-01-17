// Fake user database
var fs = require('fs');
var path = require('path');

// thunkify `fs.readFile` async funtion
var read = function (filePath) {
  return function (cb) {
    fs.readFile(filePath, cb);
  };
};

module.exports = function *dummyRoute () {
  // strip out "/api/"
  var query = this.url.slice(5);
  var ext = path.extname(query);
  var filePath = ( ext === '.json' ) ?
    path.resolve(__dirname, '../mocks/' + query) :
    path.resolve(__dirname, '../mocks/' + query + '.json');

  this.body = yield read(filePath);
};
