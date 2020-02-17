import RootPage from '../RootPage';
import data from './index.json';
import { button } from '../../components/button';
import Router from '../../router';
import styles from './index.module.css';

class Menu extends RootPage {
  constructor(){
    super();
    this._data = data;
  }

  renderTemplate(data) {
    const nav = document.createElement('nav');
    nav.className = styles.container;
  
    data.forEach( ({title, value}) => nav.appendChild( button(title, () => Router.setLocation(value) ) ) )
    
    return nav;
  }
}

export default Menu;