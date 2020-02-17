import Router from './router';
import About from './pages/About';
import Menu from './pages/Menu';
import Items from './pages/Items';
import { button } from './components/button';
import './index.css';

const router = new Router();

router.addRoute({
  'about': new About(),
  'menu': new Menu(),
  'items': new Items()
});

Router.setLocation('menu');

const buttonPrev = button('Назад', () => router.prev());
document.getElementById('root').appendChild(buttonPrev);
