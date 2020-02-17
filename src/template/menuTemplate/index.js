import { buttonTemplate } from '../buttonTemplate';
import styles from './index.module.css';

export const menuTemplate = data => {
  const nav = document.createElement('nav');
  nav.className = styles.container;

  for(const {value, callback} of data){
    nav.appendChild(buttonTemplate(value, callback));
  }

  return nav;
}