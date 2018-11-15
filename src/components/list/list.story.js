import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, array } from '@storybook/addon-knobs';
import { createBoxModel, createSelectKnob } from '../../../.storybook/utils';
import theme from '../../styles/theme';
import List from './list';

storiesOf('List', module)
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

    const tagSelect = createSelectKnob('tag', ['ol', 'ul', 'nav'], 'ul');

    const unStyled = boolean('unstyled', false);

    return (
      <ThemeProvider theme={theme()}>
        <List
          tag={tagSelect}
          padding={PaddingArray}
          margin={marginArray}
          unstyled={unStyled}
        >
          <li>This</li>
          <li>is</li>
          <li>a</li>
          <li>list</li>
        </List>
      </ThemeProvider>
    );
  });
