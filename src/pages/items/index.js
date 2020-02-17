import RootPage from '../RootPage';
import data from './index.json';
import styles from './index.module.css';
import samsung from './images/samsung.jpg';
import honor from './images/honor.jpg';
import iphone from './images/iphone.jpg';

const images = {
  iphone, 
  samsung, 
  honor
}

const itemTemplate = ({name, srcImg, quantity, price}, images) => {
  const li = document.createElement('li');
  li.className = styles.containerItem;
  li.innerHTML = `
    <div class=${styles.nameItem}>
      ${name}
    </div>
    <img class=${styles.imgItem} src=${images[srcImg]}>
    <ul class=${styles.dataUlItem}>
      <li class=${styles.dataLiItem}>
        Колличество: ${quantity}
      </li>
      <li class=${styles.dataLiItem}>
        Цена: ${price} руб.
      </li>
    </ul>
  `
  return li;
}

const itemsTemplate = ({items, total}) => {
  const ul = document.createElement('ul');
  ul.className = styles.container;

  for(let i = 1; i <= total; i++) {
    ul.appendChild(itemTemplate(items[i], images));
  }
  
  return ul;
}

const items = new RootPage(itemsTemplate, data);

export default items;