import React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../components/App';

storiesOf('App', module)
  .add('with text', () => <App appName="foobar" />)
  .add('with different text', () => <App appName="mork" />);
