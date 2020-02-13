import Router from './router';
import AboutPage from './pages/AboutPage';
import { aboutContent } from './pagesContent/about';
import Menu from './pages/Menu';
import button from './components/button';
import './index.css';

const dataMenu = [
  {
    value: 'Товары', 
    callback: () => router.render('items')
  },
  {
    value: 'О нас', 
    callback: () => router.render('about')
  }
];

const router = new Router({
  'about': new AboutPage(document.getElementById('content'), aboutContent),
  'menu': new Menu(document.getElementById('content'), button, dataMenu)
});

router.render('menu');

button(document.getElementById('root'), 'Назад');
