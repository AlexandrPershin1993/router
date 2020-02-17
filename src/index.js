import Router from './router';
import aboutPage from './pages/aboutPage';
import menuPage from './pages/menuPage';
import itemsPage from './pages/itemsPage';
import { buttonTemplate } from './template/buttonTemplate';
import './index.css';

Router.addRoute({
  'about': aboutPage,
  'menu': menuPage,
  'items': itemsPage
});

Router.setLocation('menu');

const buttonPrev = buttonTemplate('Назад', () => Router.prev());
document.getElementById('root').appendChild(buttonPrev);
