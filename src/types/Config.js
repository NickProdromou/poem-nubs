// @flow
import { type ComponentType } from 'react';

export type AppRoute = {
  name: string,
  exact: boolean,
  path: string,
  component: ComponentType<{ [string]: any }>,
  id: string,
};
export type AppRouteCollection = Array<AppRoute>;

export type RouterNavigation = {
  name: string,
  to: string,
  id: string,
};
export type RouteLinkCollection = Array<RouterNavigation>;

export type Config = {
  appRoutes: AppRouteCollection,
  navLinks: RouteLinkCollection,
};
