import styles from './index.module.css';

class ItemsPage {
  constructor(elem, dataItems) {
    this._elem = elem;
    this._dataItems = dataItems;
  }

  _createItem({name, srcImg, quantity, price}) {
    const containerItem = document.createElement('li');
    containerItem.className = styles.containerItem;
    
    const nameItem = document.createElement('div');
    nameItem.className = styles.nameItem;
    nameItem.innerHTML = name;

    const imgItem = document.createElement('img');
    imgItem.className = styles.imgItem;
    imgItem.src = srcImg;

    const dataUlItem = document.createElement('ul');
    dataUlItem.className = styles.dataUlItem;
    
    const dataLiQuantityItem = document.createElement('li');
    dataLiQuantityItem.className = styles.dataLiItem;
    dataLiQuantityItem.innerHTML = `Колличество: ${quantity}`;
    
    const dataLiPriceItem = document.createElement('li');
    dataLiPriceItem.className = styles.dataLiItem;
    dataLiPriceItem.innerHTML = `Цена: ${price} руб.`;
    
    dataUlItem.append(dataLiQuantityItem, dataLiPriceItem);

    containerItem.append(nameItem, imgItem, dataUlItem);
    return containerItem;
  }

  render() {
    this._elem.innerHTML = '';
    const ul = document.createElement('ul');
    const {items, total} = this._dataItems;

    for(let i = 1; i <= total; i++) {
      ul.appendChild(this._createItem(items[i]));
    }

    ul.className = styles.container;
    this._elem.appendChild(ul);
  }
}

export default ItemsPage;