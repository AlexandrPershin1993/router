import styles from './index.module.css';

export const itemTemplate = ({name, srcImg, quantity, price}) => {
  const li = document.createElement('li');
  li.className = styles.containerItem;
  li.innerHTML = `
    <div class=${styles.nameItem}>
      ${name}
    </div>
    <img class=${styles.imgItem} src=${srcImg}>
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