// @flow

import * as React from 'react';
import Styled, { css } from 'styled-components';

import type { StyleFunction } from '../../types/StyleFunction';
import type { Theme, ThemeColours } from '../../types/Theme';

type WrapperProps = {
  children: React.Node,
  colour?: ThemeColours,
  constrain?: boolean,
  theme: Theme,
};

const setBackground: StyleFunction = ({ theme, colour }: WrapperProps) =>
  theme &&
  colour &&
  css`
    background-color: ${theme.colours[colour]};
  `;

const constrainChildren: StyleFunction = ({ constrain }: WrapperProps) =>
  constrain
    ? css`
        max-width: 1024px;
      `
    : css`
        max-width: 100%;
      `;

const wrapperPadding: StyleFunction = ({ theme }) =>
  css`
    padding: 0 ${theme.spacing.larger};
  `;

const Wrapper = Styled.div`  
  ${props => setBackground(props)}
  ${props => constrainChildren(props)}
  ${props => wrapperPadding(props)}

  margin: 0 auto;
`;

Wrapper.defaultProps = {
  colour: 'background',
  constrain: true,
};

Wrapper.displayName = 'Wrapper';

export default Wrapper;
