import RootPage from './RootPage';
import { menuData } from '../pagesData/menu';
import { menuTemplate } from '../template/menuTemplate';

const menu = new RootPage(menuTemplate, menuData);

export default menu;