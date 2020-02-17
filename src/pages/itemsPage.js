import RootPage from './RootPage';
import { itemsData } from '../pagesData/items';
import { itemsTemplate } from '../template/itemsTemplate';

const itemsPage = new RootPage(itemsTemplate, itemsData);

export default itemsPage;