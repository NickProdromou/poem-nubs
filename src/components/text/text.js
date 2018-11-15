// @flow
import * as React from 'react';
import Styled, { css, type ReactComponentStyled } from 'styled-components';

import type {
  Theme,
  ThemeFontSettings,
  ThemeFonts,
  ThemeColours,
  ColourScaleValues,
} from '../../types/theme';
import type { StyleFunction } from '../../types/styleFunction';

type TextProps = {
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: React.Node,
  weight?: 400 | 500 | 700 | 900 | 'bold' | 'normal' | 'light',
};

type TextStyleProps = {
  size?: ThemeFontSettings,
  weight?: 400 | 500 | 700 | 900 | 'bold' | 'normal' | 'light',
  lineHeight?: ThemeFontSettings,
  colour?: {
    type: ThemeColours,
    shade: ColourScaleValues,
  },
  italic?: boolean,
  font?: ThemeFonts,
  theme?: Theme,
};

type TextComponentProps = TextStyleProps & TextProps;

const setFontSize: StyleFunction = ({ theme, size }: TextStyleProps) =>
  theme &&
  size &&
  css`
    font-size: ${theme.fontSizes[size]};
  `;

const setFontWeight: StyleFunction = ({ weight }: TextStyleProps) => css`
  font-weight: ${weight};
`;

const setFontStyle: StyleFunction = ({ italic }: TextStyleProps) => css`
  font-style: ${italic ? 'italic' : 'normal'};
`;

const setFontFamily: StyleFunction = ({ font, theme }: TextStyleProps) =>
  theme &&
  font &&
  css`
    font-family: ${theme.fonts[font]};
  `;

const setTextColour: StyleFunction = ({ theme, colour: { type, shade } }) =>
  theme &&
  type &&
  shade &&
  css`
    color: ${theme.colours[type][shade]};
  `;

const setLineHeight: StyleFunction = ({
  lineHeight,
  theme,
}: TextStyleProps) => css`
  line-height: ${theme && lineHeight && theme.lineHeight[lineHeight]};
`;

const TextStyle = (Styled.p.attrs({})`  
  ${props => setFontSize(props)};
  ${props => setFontWeight(props)}
  ${props => setFontStyle(props)}
  ${props => setFontFamily(props)}
  ${props => setLineHeight(props)}
  ${props => setTextColour(props)};
`: ReactComponentStyled<TextStyleProps>);

const Text = ({ children, tag, ...rest }: TextComponentProps) => {
  if (!tag) {
    return null;
  }
  const TextElement: React.ComponentType<TextProps> = TextStyle.withComponent(
    tag,
  );

  TextElement.displayName = `Text.${tag}`;

  return <TextElement {...rest}>{children}</TextElement>;
};

Text.displayName = 'Text';

Text.defaultProps = {
  tag: 'p',
  size: 'ui',
  weight: 'normal',
  lineHeight: 'ui',
  italic: false,
  font: 'body',
  colour: {
    type: 'neutral',
    shade: 'darkest',
  },
};

export default Text;
