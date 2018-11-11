// @flow

import Layout from '../Layout/Layout';

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Layout,
    includeInNav: true,
    id: 'route-home',
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: Layout,
    includeInNav: true,
    id: 'route-about',
  },
  {
    name: 'the nubs',
    path: '/nubs',
    exact: true,
    component: Layout,
    includeInNav: true,
    id: 'route-nubs',
  },
  {
    name: 'all time best nubs',
    path: '/hall-of-fame',
    exact: true,
    component: Layout,
    includeInNav: true,
    id: 'route-all-time-best',
  },
  {
    name: 'contact us',
    path: '/contact',
    exact: true,
    component: Layout,
    includeInNav: true,
    id: 'route-contact',
  },
  {
    path: '/error',
    exact: true,
    component: Layout,
    includeInNav: false,
    id: 'route-error',
  },
];
