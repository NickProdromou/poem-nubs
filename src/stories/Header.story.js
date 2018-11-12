import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import SiteHeader from '../components/Header/Header';

import theme from '../styles/theme';

storiesOf('Header', module).add('Everything', () => (
  <BrowserRouter>
    <ThemeProvider theme={theme()}>
      <SiteHeader />
    </ThemeProvider>
  </BrowserRouter>
));
