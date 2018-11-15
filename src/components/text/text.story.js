import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import {
  createSelectKnob,
  sizes,
  weights,
  fonts,
} from '../../../.storybook/utils';
import theme from '../../styles/theme';
import Text from './text';

const stories = storiesOf('Text', module).addDecorator(withKnobs);

stories.add('without props', () => (
  <ThemeProvider theme={theme()}>
    <Text>example text foobar</Text>
  </ThemeProvider>
));

stories.add('nesting', () => (
  <ThemeProvider theme={theme()}>
    <Text>
      <Text tag="h2">This is a h2 tag</Text> this is text inside a P tag
      <Text tag="span" weight="bold">
        {' '}
        this will render in a span
      </Text>
    </Text>
  </ThemeProvider>
));

stories.add('all props', () => {
  const sizeKnob = createSelectKnob('size', sizes, 'ui');
  const lineHeightKnob = createSelectKnob('lineHeight', sizes, 'ui');
  const fontWeightKnob = createSelectKnob('weight', weights, 'regular');
  const fontKnob = createSelectKnob('font', fonts, 'body');
  const italicKnob = boolean('italic', false);
  const editableContent = text('content', 'Type some words here');

  return (
    <ThemeProvider theme={theme()}>
      <Text
        size={sizeKnob}
        lineHeight={lineHeightKnob}
        weight={fontWeightKnob}
        font={fontKnob}
        italic={italicKnob}
      >
        {editableContent}
      </Text>
    </ThemeProvider>
  );
});

stories.add('all headings h1-h6', () => (
  <ThemeProvider theme={theme()}>
    <React.Fragment>
      <Text tag="h1" size="h1">
        h1
      </Text>
      <Text tag="h2" size="h2">
        h2
      </Text>
      <Text tag="h3" size="h3">
        h3
      </Text>
      <Text tag="h4" size="h4">
        h4
      </Text>
      <Text tag="h5" size="h5">
        h5
      </Text>
      <Text tag="h6" size="h6">
        h6
      </Text>
    </React.Fragment>
  </ThemeProvider>
));
