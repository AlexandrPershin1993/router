import Router from './router';
import about from './pages/about';
import menu from './pages/menu';
import items from './pages/items';
import { button } from './components/button';
import './index.css';

const router = new Router();

router.addRoute({
  'about': about,
  'menu': menu,
  'items': items
});

Router.setLocation('menu');

const buttonPrev = button('Назад', () => router.prev());
document.getElementById('root').appendChild(buttonPrev);
