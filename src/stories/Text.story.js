import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import createSelectKnob from './utils/createSelectKnob';
import { sizes, weights, fonts } from './utils/themeProps';

import theme from '../styles/theme';
import Text from '../components/Text/Text';

const stories = storiesOf('Text', module).addDecorator(withKnobs);

stories.add('without props', () => (
  <ThemeProvider theme={theme()}>
    <Text.p>example text foobar</Text.p>
  </ThemeProvider>
));

stories.add('nesting', () => (
  <ThemeProvider theme={theme()}>
    <Text.p>
      <Text.h2>This is a h2 tag</Text.h2> this is text inside a P tag
      <Text.span weight="bold"> this will render in a span</Text.span>
    </Text.p>
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
      <Text.p
        size={sizeKnob}
        lineHeight={lineHeightKnob}
        weight={fontWeightKnob}
        font={fontKnob}
        italic={italicKnob}
      >
        {editableContent}
      </Text.p>
    </ThemeProvider>
  );
});

stories.add('all headings h1-h6', () => (
  <ThemeProvider theme={theme()}>
    <React.Fragment>
      <Text.h1 size="h1">h1</Text.h1>
      <Text.h2 size="h2">h2</Text.h2>
      <Text.h3 size="h3">h3</Text.h3>
      <Text.h4 size="h4">h4</Text.h4>
      <Text.h5 size="h5">h5</Text.h5>
      <Text.h6 size="h6">h6</Text.h6>
    </React.Fragment>
  </ThemeProvider>
));
