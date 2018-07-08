// @flow
import 'normalize.css';
import * as React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import globalStyle from './styles/globals';

import App from './components/App';

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

render(<App appName="Poem Nubs" />, element);
