// @flow
import * as React from 'react';
import styled, { css, type ReactComponentStyled } from 'styled-components';

import type { BoxModel } from '../../types/BoxModel';
import calculateSpacingFromTheme from '../../styles/functions/calculateSpacingFromTheme';
import { Theme } from '../../types/Theme';
import themeFunction from '../../styles/theme';

export type ListStyleProps = {
  theme?: Theme,
  padding?: BoxModel,
  margin?: BoxModel,
  unstyled?: boolean,
};

type ListProps = {
  children: Array<React.Node>,
  tag?: 'ul' | 'ol' | 'nav',
};

const defaultSpacing = [0, 0, 0, 0];

type ListComponentProps = ListStyleProps & ListProps;

const setListPadding = ({ padding, theme }: ListStyleProps) =>
  padding &&
  theme &&
  css`
    ${calculateSpacingFromTheme('padding', padding, theme)};
  `;

const setListMargin = ({ margin, theme }: ListStyleProps) =>
  margin &&
  theme &&
  css`
    ${calculateSpacingFromTheme('margin', margin, theme)};
  `;

const setUnstyled = ({ unstyled = false }) =>
  unstyled ? 'list-style-type: none;' : 'list-style-type: initial;';

const ListStyle = (styled.div.attrs({})`
  ${setListPadding}
  ${setListMargin}
  ${setUnstyled}
`: ReactComponentStyled<ListStyleProps>);

const List = ({ children, tag, ...rest }: ListComponentProps) => {
  if (!tag) {
    return null;
  }
  const ListElement: React.ComponentType<ListProps> = ListStyle.withComponent(
    tag,
  );

  ListElement.displayName = `List.${tag}`;

  return <ListElement {...rest}>{children}</ListElement>;
};

List.displayName = 'List';

List.defaultProps = {
  theme: themeFunction(),
  padding: defaultSpacing,
  margin: defaultSpacing,
  tag: 'ul',
  unstyled: false,
};

export default List;
