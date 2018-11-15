import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import createSelectKnob from '../../../.storybook/stories/utils/createSelectKnob';
import { colours } from '../../../.storybook/stories/utils/themeProps';

import theme from '../../styles/theme';
import Wrapper from './wrapper';
import Text from '../text/text';

const stories = storiesOf('Wrapper', module).addDecorator(withKnobs);

stories.add('default props', () => (
  <ThemeProvider theme={theme()}>
    <Wrapper>
      <Text tag="h1">This will be wrapped at 1024px</Text>
    </Wrapper>
  </ThemeProvider>
));

stories.add('all props', () => {
  const colourKnob = createSelectKnob('colours', colours, 'background');
  const constrainKnob = boolean('constrain', false);

  return (
    <ThemeProvider theme={theme()}>
      <Wrapper colour={colourKnob} constrain={constrainKnob}>
        <Text tag="span" weight="bold">
          Some content to wrap
        </Text>
      </Wrapper>
    </ThemeProvider>
  );
});
