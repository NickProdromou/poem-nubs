// @flow
import { type Config } from '../types/config';

import appRoutes from './appRoutes';
import navLinks from './navLinks';

const siteConfig: Config = {
  navLinks,
  appRoutes,
};

export default siteConfig;
