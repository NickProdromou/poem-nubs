// @flow
import { type RouterNavigation } from '../types/RouterNavigation';

const navLinks: Array<RouterNavigation> = [
  {
    name: 'home',
    to: '/',
    id: 'route-home',
  },
  {
    name: 'about',
    to: '/about',
    id: 'route-about',
  },
  {
    name: 'the nubs',
    to: '/nubs',
    id: 'route-nubs',
  },
  {
    name: 'all time best nubs',
    to: '/hall-of-fame',
    id: 'route-all-time-best',
  },
  {
    name: 'contact us',
    to: '/contact',
    id: 'route-contact',
  },
];

export default navLinks;
