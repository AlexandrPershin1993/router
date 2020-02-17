import styles from './index.module.css';

export const aboutTemplate = data => {
  const p = document.createElement('p');
  p.className = styles.container;
  p.innerHTML = data;

  return p;
}