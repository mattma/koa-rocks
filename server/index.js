var app = require('./main');

var env = process.env.NODE_ENV || 'development';
var port = process.env.port || 3001;
var options = {
  port: port,
  env: env,
  liveReload: false
};

// bootstrap the application
app(options);
