// @flow
import 'normalize.css';
import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import globalStyle from './styles/globals';

import theme from './styles/theme';
import AppRouter from './containers/Router/AppRouter';

WebFont.load({
  google: {
    families: ['Merriweather:400,700,900', 'Open Sans:400,500'],
  },
});

globalStyle();

const element: HTMLElement | null = document.getElementById('app-target');

if (!element) {
  throw new Error("couldn't find element with id 'app-target'");
}

render(
  <ThemeProvider theme={theme()}>
    <AppRouter />
  </ThemeProvider>,
  element,
);
