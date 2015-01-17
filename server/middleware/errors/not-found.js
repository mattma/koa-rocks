module.exports = function () {
  return function* pageNotFoundHandler (next) {
    yield* next;

    if (this.response.body) {
      return;
    }
    if (this.response.status !== 404) {
      return;
    }
    this.throw(404);
  };
};
