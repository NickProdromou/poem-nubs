// @flow
import Layout from '../containers/Layout/Layout';
import { type AppRoute } from '../types/Config';

const AppRoutes: Array<AppRoute> = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Layout,
    id: 'route-home',
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: Layout,
    id: 'route-about',
  },
  {
    name: 'the nubs',
    path: '/nubs',
    exact: true,
    component: Layout,
    id: 'route-nubs',
  },
  {
    name: 'all time best nubs',
    path: '/hall-of-fame',
    exact: true,
    component: Layout,
    id: 'route-all-time-best',
  },
  {
    name: 'contact us',
    path: '/contact',
    exact: true,
    component: Layout,
    id: 'route-contact',
  },
  {
    name: 'error',
    path: '/error',
    exact: true,
    component: Layout,
    id: 'route-error',
  },
];

export default AppRoutes;
