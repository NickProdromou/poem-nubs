import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import theme from '../styles/theme';
import Text from '../components/Text/Text';

const stories = storiesOf('Text', module);

const sizes = ['tiny', 'detail', 'ui', 'h3', 'h2', 'h1'];
const weights = [400, 500, 700, 900, 'bold', 'regular', 'light'];
stories.addDecorator(withKnobs);

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
  const sizeLabel = 'size';
  const sizeOptions = sizes.reduce((accum, size) => {
    const newAccum = {
      ...accum,
      [size]: size,
    };
    return newAccum;
  }, {});
  const sizeDefault = 'ui';

  const lineHeightLabel = 'lineHeight';
  const lineHeightOptions = sizeOptions;
  const lineHeightDefault = 'ui';

  const fontWeightLabel = 'weight';
  const fontWeightOptions = weights.reduce((accum, weight) => {
    const newAccum = {
      ...accum,
      [weight]: weight,
    };
    return newAccum;
  }, {});
  const fontWeightDefault = 'regular';

  const label = 'content';
  const defaultValue = 'Type some words here';

  const fontLabel = 'font family';
  const fontOptions = {
    body: 'body',
    heading: 'heading',
  };
  const fontDefault = 'body';

  return (
    <ThemeProvider theme={theme()}>
      <Text.p
        size={select(sizeLabel, sizeOptions, sizeDefault)}
        lineHeight={select(
          lineHeightLabel,
          lineHeightOptions,
          lineHeightDefault,
        )}
        weight={select(fontWeightLabel, fontWeightOptions, fontWeightDefault)}
        font={select(fontLabel, fontOptions, fontDefault)}
        inline={boolean('inline', false)}
      >
        {text(label, defaultValue)}
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
