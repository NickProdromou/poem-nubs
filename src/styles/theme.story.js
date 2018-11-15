import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Wrapper from '../components/wrapper/wrapper';

import {
  ColourPalette,
  SpacingList,
} from '../../.storybook/stories/components/theme';

storiesOf('Theme', module)
  .add('Colours', () => (
    <ThemeProvider theme={theme()}>
      <Wrapper constrain>
        {Object.entries(theme().colours).map(([groupName, values]) => (
          <ColourPalette colourGroupName={groupName} colourList={values} />
        ))}
      </Wrapper>
    </ThemeProvider>
  ))
  .add('Spacing', () => (
    <ThemeProvider theme={theme()}>
      <SpacingList spacing={theme().spacing} />
    </ThemeProvider>
  ));
