import RootPage from '../RootPage';
import data from './index.json';
import { button } from '../../components/button';
import Router from '../../router';
import styles from './index.module.css';

const menuTemplate = data => {
  const nav = document.createElement('nav');
  nav.className = styles.container;

  data.forEach( ({title, value}) => nav.appendChild( button(title, () => Router.setLocation(value) ) ) )
  
  return nav;
}

const menu = new RootPage(menuTemplate, data);

export default menu;