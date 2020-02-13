import styles from './index.module.css';

const button = (elem, value, onClick) => {
  const but = document.createElement('input');
  but.value = value;
  but.type = 'button';
  but.className = styles.button;
  but.onClick = onClick;
  elem.appendChild(but);
}

export default button;