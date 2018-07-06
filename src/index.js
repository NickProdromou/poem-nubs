// @flow
import * as React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const element: HTMLElement | null = document.getElementById('app-target');

if (!element) {
  throw new Error("couldn't find element with id 'app-target'");
}

render(<App appName="Poem Nubs" />, element);
