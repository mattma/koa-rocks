/**
 * Module dependencies.
 */

var views = require('co-views');

// setup views mapping .html
// to the swig template engine

// will render from the ../../client folder
module.exports = views(__dirname + '/../../client/', {
  map: { html: 'swig' }
});
