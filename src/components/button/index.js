import styles from './index.module.css';

export const button = (value, onClick) => {
  const button = document.createElement('button');
  button.className = styles.button;
  button.onclick = onClick;
  button.innerHTML = value;
  return button;
}