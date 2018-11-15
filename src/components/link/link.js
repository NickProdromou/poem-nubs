// @flow
import * as React from 'react';
import {
  Link as ReactRouterLink,
  NavLink,
  type LocationShape,
} from 'react-router-dom';
import styled, { css, type ReactComponentStyled } from 'styled-components';

import type { BoxModel } from '../../types/boxModel';
import calculateSpacingFromTheme from '../../styles/functions/calculateSpacingFromTheme';
import { Theme } from '../../types/theme';
import themeFunction from '../../styles/theme';

export type LinkStyleProps = {
  theme?: Theme,
  padding?: BoxModel,
  margin?: BoxModel,
};

export type LinkProps = {
  tag?: 'a' | 'Link' | 'NavLink',
  to?: string | LocationShape,
  href?: string,
  children: string,
};

export type LinkComponentProps = LinkStyleProps & LinkProps;

const linkPadding = ({ padding, theme }: LinkStyleProps) =>
  padding &&
  theme &&
  css`
    ${calculateSpacingFromTheme('padding', padding, theme)};
  `;

const linkMargin = ({ margin, theme }: LinkStyleProps) =>
  margin &&
  theme &&
  css`
    ${calculateSpacingFromTheme('margin', margin, theme)};
  `;

const LinkStyle = (styled.div.attrs({})`
  ${linkPadding} ${linkMargin};
`: ReactComponentStyled<LinkStyleProps>);

const Link = ({ tag, children, ...rest }: LinkComponentProps) => {
  let LinkElement;

  switch (tag) {
    case 'a': {
      LinkElement = (LinkStyle.withComponent(tag): React.ComponentType<
        LinkProps,
      >);
      LinkElement.displayName = `List.${tag}`;
      return <LinkElement {...rest}>{children}</LinkElement>;
    }

    case 'Link': {
      LinkElement = LinkStyle.withComponent(ReactRouterLink);
      LinkElement.displayName = `List.${tag}`;

      return <LinkElement {...rest}>{children}</LinkElement>;
    }

    case 'NavLink': {
      LinkElement = LinkStyle.withComponent(NavLink);
      LinkElement.displayName = `List.${tag}`;

      return <LinkElement {...rest}>{children}</LinkElement>;
    }

    default:
      return null;
  }
};

Link.displayName = 'Link';

Link.defaultProps = {
  theme: themeFunction(),
  padding: [0],
  margin: [0],
  tag: 'a',
};

export default Link;
