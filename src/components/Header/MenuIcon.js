// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Theme } from '../../types/Theme';

const HeaderMenuIcon = styled(({ isActive: boolean, ...rest }) => (
  <MdMenu {...rest} />
))`
  ${({ theme, isActive }: { theme: Theme, isActive: boolean }) => css`
    margin-right: ${theme.spacing.larger};
    font-size: ${theme.fontSizes.h3};
    color: ${isActive
      ? theme.colours.primary.light
      : theme.colours.neutral.darkest};

    &:hover {
      cursor: pointer;
    }
  `};
`;

export default HeaderMenuIcon;
