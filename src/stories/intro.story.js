import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('Intro', () => (
  <div>
    <h1>Welcome to the storybook</h1>
    <p>docs etc</p>
  </div>
));
