// @flow
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import theme from '../../styles/theme';
import Router from '../router/router';

const App = () => (
  <ThemeProvider theme={theme()}>
    <Router />
  </ThemeProvider>
);

export default hot(module)(App);
