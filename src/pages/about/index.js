import RootPage from '../RootPage';
import data from './index.json';
import styles from './index.module.css';


class About extends RootPage {
  constructor(){
    super();
    this._data = data;
  }

  renderTemplate(data) {
    const p = document.createElement('p');
    p.className = styles.container;
    p.innerHTML = data;
    return p;
  }
};

export default About;