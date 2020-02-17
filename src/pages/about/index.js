import RootPage from '../RootPage';
import data from './index.json';
import styles from './index.module.css';

const aboutTemplate = (data) => {
  const p = document.createElement('p');
  p.className = styles.container;
  p.innerHTML = data;

  return p;
}

const about = new RootPage(aboutTemplate, data);

export default about;