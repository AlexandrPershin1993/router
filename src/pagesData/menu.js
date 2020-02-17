import Router from '../router';

export const menuData = [
  {
    value: 'Товары', 
    callback: () => Router.setLocation('items')
  },
  {
    value: 'О нас', 
    callback: () => Router.setLocation('about')
  }
];