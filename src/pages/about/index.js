import RootPage from '../RootPage';
import data from './index.json';
import styles from './index.module.css';


class About extends RootPage {
  constructor(){
    super();
    this._data = data;
  }

  renderTemplate({data, header}) {
    const div = document.createElement('div');
    div.className = styles.container;
    div.innerHTML = `
      <h1>
        ${header}
      </h1>
      <p>
        ${data}
      </p>
    `;
    return div;
  }
};

export default About;