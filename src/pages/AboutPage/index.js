import styles from './index.module.css';

class AboutPage {
  constructor(elem, content) {
    this._elem = elem;
    this._content = content;
  }
  render() {
    this._elem.innerHTML = '';
    const p = document.createElement('p');
    p.className = styles.container;
    p.innerHTML = this._content;
    this._elem.appendChild(p);
  }
}

export default AboutPage;