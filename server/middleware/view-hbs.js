var path = require('path');
var hbs = require('koa-hbs');

var viewPath = path.join(__dirname, '..', 'views');
var layoutsPath = path.join(__dirname, '..', 'views/layout');
var partialsPath = path.join(__dirname, '..', 'views/partials');

module.exports = function(){
  return hbs.middleware({
    viewPath:     viewPath,
    layoutsPath:  layoutsPath,
    partialsPath: partialsPath
  });
};
