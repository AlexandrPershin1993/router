class Router {
  constructor(routes) {
    this._hooks = {};
    this._routes = routes;
    this._hash = window.location.hash;
    this._history = [];
    this._indexHistory = -1;
  }

  _setLocation(hash) {
    const url = new URL(window.location);
    url.hash = hash;
    window.location = url.toString();
  }
  
  getHash() {
    return this._hash;
  }

  getHistory() {
    let history = this._history;
    if (history.length > 10) history = history.slice(-10);
    return history;
  }

  prev() {
    if(this._indexHistory === 0) return;
    this._indexHistory = this._indexHistory - 1;
    const prewHash = this._history[this._indexHistory];
    this.render(prewHash, true);
  }

  next() {
    if(this._indexHistory >= this._history.length - 1) return;
    this._indexHistory = this._indexHistory + 1;
    const nextHash = this._history[this._indexHistory];
    this.render(nextHash, true);
  }

  addRoute(route) {
    if(Array.isArray(route)) {
      this._routes = Object.assign({}, this._routes, ...route);
      return;
    }

    this._routes = {
      ...this._routes, 
      ...route
    }
  }

  listen(name, fn) {
    this._hooks[name] = fn;
  }

  fire(name, ...args) {
    if(! (name in this._hooks)) return;
    this._hooks[name].call(this, ...args);
  }

  render(hash, onHistory) {
    if(! (hash in this._routes)) return;
    this._hash = hash;

    if(! onHistory) {
      this._history.length = this._indexHistory + 1;
      this._history.push(hash);
      this._indexHistory = this._indexHistory + 1
    }

    this._setLocation(hash);
    this._routes[hash].render();
  }
}

export default Router;