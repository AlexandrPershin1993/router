import styles from './index.module.css';

export const buttonTemplate = (value, onClick) => {
  const but = document.createElement('button');
  but.className = styles.button;
  but.onclick = onClick;
  but.innerHTML = value;
  return but;
}