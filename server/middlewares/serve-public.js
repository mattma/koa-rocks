var path = require('path');
var serve = require('koa-static');

var PUBLIC_PATH = path.join(__dirname, '..', '..', 'client');

module.exports = function(){
  return serve(PUBLIC_PATH);
};
