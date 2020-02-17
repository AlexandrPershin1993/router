import RootPage from '../RootPage';
import data from './index.json';
import styles from './index.module.css';

class Menu extends RootPage {
  constructor(){
    super();
    this._data = data;
  }

  renderMenuItem(title, value) {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href='#${value}' class=${styles.aItem}>
        ${title}
      </a>
    `;
    return li;
  }

  renderTemplate(data) {
    const nav = document.createElement('nav');
    nav.className = styles.container;
    const ul = document.createElement('ul');
    ul.className = styles.ul; 

    data.forEach( ({title, value}) => ul.appendChild( this.renderMenuItem(title, value) ) );

    nav.appendChild(ul);
    return nav;
  }
}

export default Menu;