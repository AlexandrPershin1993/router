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

  renderProductItem({name, srcImg, quantity, price}, images) {
    const li = document.createElement('li');
    li.className = styles.containerItem;
    li.innerHTML = `
      <div class=${styles.nameItem}>
        ${name}
      </div>
      <img class=${styles.imgItem} src=${images[srcImg]}>
      <ul class=${styles.dataUlItem}>
        <li class=${styles.priceItem}>
          Цена: ${price} руб.
        </li>
        <li class=${styles.quantityItem}>
          Колличество: ${quantity}
        </li>
      </ul>
    `
    return li;
  }
  
  renderTemplate({items, total}) {
    const ul = document.createElement('ul');
    ul.className = styles.container;
  
    for(let i = 1; i <= total; i++) {
      ul.appendChild(this.renderProductItem(items[i], this._images));
    }
    
    return ul;
  }
}

export default Items;