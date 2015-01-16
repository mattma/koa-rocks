module.exports = function rootRoute (options) {
  return function *rootRoute () {
    yield this.render('base', {
      liveReload: options.liveReload,
      liveReloadPort: options.liveReloadPort
    });
  };
};
