import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, array } from '@storybook/addon-knobs';

import theme from '../../styles/theme';
import Link from './link';
import createSelectKnob from '../../../.storybook/stories/utils/createSelectKnob';
import createBoxModel from '../../../.storybook/stories/utils/createBoxModel';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('all props', () => {
    const [
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    ] = createBoxModel('padding', 'padding');

    const [marginTop, marginRight, marginBottom, marginLeft] = createBoxModel(
      'margin',
      'margin',
    );

    const PaddingArray = array(
      'padding',
      [paddingTop, paddingRight, paddingBottom, paddingLeft],
      ',',
      'padding',
    );

    const marginArray = array(
      'margin',
      [marginTop, marginRight, marginBottom, marginLeft],
      ',',
      'margin',
    );

    const tagSelect = createSelectKnob('tag', ['a', 'Link', 'NavLink'], 'a');

    const unStyled = boolean('unstyled', false);

    return (
      <ThemeProvider theme={theme()}>
        <Link
          href="#/"
          tag={tagSelect}
          padding={PaddingArray}
          margin={marginArray}
          unstyled={unStyled}
        >
          This is a link
        </Link>
      </ThemeProvider>
    );
  });
