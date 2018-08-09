// @flow
import * as React from 'react';
import Styled, { css } from 'styled-components';

import type { Theme } from '../../styles/theme';
import type { StyleFunction } from '../../types';

type Props = {
  size?:
    | 'tiny'
    | 'detail'
    | 'ui'
    | 'h3'
    | 'h2'
    | 'h1'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6',
  children: React.Node,
  weight?: 400 | 500 | 700 | 900 | 'bold' | 'normal' | 'light',
  lineHeight?: number,
  italic?: boolean,
  font?: 'heading' | 'body',
  theme?: Theme,
};

const setFontSize: StyleFunction = ({ theme, size }: Props) =>
  theme &&
  css`
    font-size: ${theme.fontSizes[(size: any)]};
  `;

const setFontWeight: StyleFunction = ({ weight }: Props) => css`
  font-weight: ${weight};
`;

const setFontStyle: StyleFunction = ({ italic }: Props) => css`
  font-style: ${italic ? 'italic' : 'normal'};
`;

const setFontFamily: StyleFunction = ({ font, theme }: Props) =>
  theme &&
  font &&
  css`
    font-family: ${theme.fonts[font]};
  `;

const setLineHeight: StyleFunction = ({ lineHeight, theme }: Props) => css`
  line-height: ${theme && lineHeight && theme.lineHeight[lineHeight]};
`;

const StyledText = Styled.p`
  ${props => setFontSize(props)};
  ${props => setFontWeight(props)}
  ${props => setFontStyle(props)}
  ${props => setLineHeight(props)}
  ${props => setFontFamily(props)}
`;

StyledText.defaultProps = {
  size: 'ui',
  weight: 'normal',
  lineHeight: 'ui',
  italic: false,
  font: 'body',
  theme: {},
};

interface TextComponent {
  p: React.ComponentType<Props>;
  span: React.ComponentType<Props>;
  h1: React.ComponentType<Props>;
  h2: React.ComponentType<Props>;
  h3: React.ComponentType<Props>;
  h4: React.ComponentType<Props>;
  h5: React.ComponentType<Props>;
  h6: React.ComponentType<Props>;
}

const Text: TextComponent = {
  p: StyledText,
  span: StyledText.withComponent('span'),
  h1: StyledText.withComponent('h1'),
  h2: StyledText.withComponent('h2'),
  h3: StyledText.withComponent('h3'),
  h4: StyledText.withComponent('h4'),
  h5: StyledText.withComponent('h5'),
  h6: StyledText.withComponent('h6'),
};

export default Text;
