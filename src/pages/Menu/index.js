import styles from './index.module.css';

class Menu {
  constructor(elem, button, dataButtons) {
    this._elem = elem;
    this._button = button;
    this._dataButtons = dataButtons;
  }
  render() {
    this._elem.innerHTML = '';
    const nav = document.createElement('nav');
    nav.className = styles.container;

    for(const {value, callback} of this._dataButtons){
      this._button(nav, value, callback);
    }

    this._elem.appendChild(nav);
  }
}

export default Menu;