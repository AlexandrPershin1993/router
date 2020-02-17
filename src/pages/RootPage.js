class RootPage {
  constructor(template, data) {
    this._elemRouter = document.getElementById('content');
    this._template = template;
    this._data = data;
  }

  render() {
    this._elemRouter.innerHTML = '';
    this._elemRouter.appendChild(this._template(this._data))
  }
}

export default RootPage;