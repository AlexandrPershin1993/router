class Router {
  constructor(routes) {
    this._hooks = {};
    this._routes = routes;
    this._hash = window.location.hash;
  }

  _location(hash) {
    const url = new URL(window.location);
    url.hash = hash;
    window.location = url.toString();
  }

  render(hash) {
    if(! (hash in this._routes)) return;
    this._hash = hash;
    this._location(hash);
    this._routes[hash].render();
  }
}

export default Router;