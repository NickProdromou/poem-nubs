import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import createSelectKnob from './utils/createSelectKnob';
import { colours } from './utils/themeProps';

import theme from '../styles/theme';
import Wrapper from '../components/Wrapper/Wrapper';
import Text from '../components/Text/Text';

const stories = storiesOf('Wrapper', module).addDecorator(withKnobs);

stories.add('default props', () => (
  <ThemeProvider theme={theme()}>
    <Wrapper>
      <Text.h1>This will be wrapped at 1024px</Text.h1>
    </Wrapper>
  </ThemeProvider>
));

stories.add('all props', () => {
  const colourKnob = createSelectKnob('colours', colours, 'background');
  const constrainKnob = boolean('constrain', false);

  return (
    <ThemeProvider theme={theme()}>
      <Wrapper colour={colourKnob} constrain={constrainKnob}>
        <Text.span weight="bold">Some content to wrap</Text.span>
      </Wrapper>
    </ThemeProvider>
  );
});
