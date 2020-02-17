import RootPage from '../RootPage';
import data from './index.json';
import styles from './index.module.css';
import samsung from './images/samsung.jpg';
import honor from './images/honor.jpg';
import iphone from './images/iphone.jpg';

class Items extends RootPage {
  constructor(){
    super();
    this._data = data;
    this._images = {
      iphone, 
      samsung, 
      honor
    };
  }

  productItem({name, srcImg, quantity, price}, images) {
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
  
  renderTemplate({items, total}) {
    const ul = document.createElement('ul');
    ul.className = styles.container;
  
    for(let i = 1; i <= total; i++) {
      ul.appendChild(this.productItem(items[i], this._images));
    }
    
    return ul;
  }
}

export default Items;