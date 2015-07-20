'use strict';

function rootRoute (opts) {
  return function *rootRoute () {
    yield this.render('base', {
      liveReload: opts.liveReload,
      liveReloadPort: opts.liveReloadPort
    });
  };
};

function rootRoute (api, opts) {
  console.log('typeof api: ', typeof api);
  api.get('(.*)', rootRoute(opts));
}

module.exports = rootRoute;
