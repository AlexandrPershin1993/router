import Router from './router';
import AboutPage from './pages/AboutPage';
import { aboutContent } from './pagesContent/about'
import './index.css';

const router = new Router({
  'about' : new AboutPage(document.getElementById('root'), aboutContent)
});

router.render('about');