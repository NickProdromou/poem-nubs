import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import theme from '../../styles/theme';

storiesOf('Header', module).add('Everything', () => (
  <BrowserRouter>
    <ThemeProvider theme={theme()}>
      <Header />
    </ThemeProvider>
  </BrowserRouter>
));
