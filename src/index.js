// @flow
import 'normalize.css';
import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import globalStyle from './styles/globals';

import theme from './styles/theme';
import Text from './components/Text/Text';

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
    <div>
      <Text.p>
        Poem Nubs <Text.span>foobar</Text.span>
      </Text.p>
      <Text.h1>Poem Nubs</Text.h1>
      <Text.h2>Poem Nubs</Text.h2>
    </div>
  </ThemeProvider>,
  element,
);
