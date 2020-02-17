import RootPage from './RootPage';
import { menuData } from '../pagesData/menu';
import { menuTemplate } from '../template/menuTemplate';

const menuPage = new RootPage(menuTemplate, menuData);

export default menuPage;