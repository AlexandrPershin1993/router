

class Router {
  constructor() {
    this._hooks = {};
    this._routes = {};
    this._hash = window.location.hash;
    this._history = [];
    this._indexHistory = -1;
    this._statusHistory = false;
    this.render = this.render.bind(this);
    window.addEventListener("hashchange", this.render, false);
  }
  
   static setLocation(hash) {
    const url = new URL(window.location);
    url.hash = hash;
    window.location = url.toString();
  }
  
  getHash() {
    return this._hash;
  }

  getHistory() {
    let history = this._history;
    if (history.length > 10) return history.slice(-10);
    return history;
  }

  prev(n = 1) {
    const indexHistory = this._indexHistory - n;
    if(0 > indexHistory) return;
    this._indexHistory = indexHistory;
    Router.setLocation(this._history[this._indexHistory]);
    this._statusHistory = true;
  }

  next(n = 1) {
    const indexHistory = this._indexHistory + n;
    const lastIndexHistory = this._history.length -1;
    if(lastIndexHistory < indexHistory) return;
    this._indexHistory = indexHistory;
    Router.setLocation(this._history[this._indexHistory]);
    this._statusHistory = true;
  }

  addRoute(route) {
    this._routes = {
      ...this._routes, 
      ...route
    }

    this.render();
  }

  listen(name, fn) {
    this._hooks[name] = fn;
  }

  fire(name, ...args) {
    if(! (name in this._hooks)) return;
    this._hooks[name].call(this, ...args);
  }

  render() {
    const hash = window.location.hash.replace('#','');
    if(! (hash in this._routes)) return;
    this._hash = hash;

    if(!this._statusHistory) {
      this._indexHistory = this._indexHistory + 1;
      this._history.length = this._indexHistory;
      this._history.push(hash);
    }
    
    this._statusHistory = false;
    this._routes[hash].render();
  }
}

export default Router;