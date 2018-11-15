// @flow

import * as React from 'react';
import Styled, { css } from 'styled-components';

import type { StyleFunction } from '../../types/styleFunction';
import type { Theme } from '../../types/theme';

type WrapperProps = {
  children: React.Node,
  constrain?: boolean,
  theme: Theme,
};

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
  ${props => constrainChildren(props)}
  ${props => wrapperPadding(props)}

  margin: 0 auto;
`;

Wrapper.defaultProps = {
  constrain: true,
};

Wrapper.displayName = 'Wrapper';

export default Wrapper;
