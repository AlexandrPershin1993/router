import styles from './index.module.css';

class AboutPage {
  constructor(idElem, content) {
    this._idElem = idElem;
    this._content = content;
  }
  render() {
    this._idElem.innerHTML = '';
    const p = document.createElement('p');
    p.className = styles.container;
    p.innerHTML = this._content;
    this._idElem.appendChild(p);
  }
}

export default AboutPage;