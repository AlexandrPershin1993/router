import { itemTemplate } from './itemTemplate';
import styles from './index.module.css';

export const itemsTemplate = ({items, total}) => {
  const ul = document.createElement('ul');
  ul.className = styles.container;

  for(let i = 1; i <= total; i++) {
    ul.appendChild(itemTemplate(items[i]));
  }
  
  return ul;
}