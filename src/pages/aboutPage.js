import RootPage from './RootPage';
import { aboutData } from '../pagesData/about';
import { aboutTemplate } from '../template/aboutTemplate';

const aboutPage = new RootPage(aboutTemplate, aboutData);

export default aboutPage;