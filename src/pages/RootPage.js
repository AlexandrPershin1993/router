class RootPage {
  constructor() {
    this._elemRouter = document.getElementById('content');
  }

  render() {
    this._elemRouter.innerHTML = '';
    this._elemRouter.appendChild(this.renderTemplate(this._data))
  }
}

export default RootPage;