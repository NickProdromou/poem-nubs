// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Theme } from '../../types/Theme';

const HeaderMenuIcon = styled(({ isActive, ...rest }) => <MdMenu {...rest} />)`
  ${({ theme, isActive }: { theme: Theme, isActive: boolean }) => css`
    margin-right: ${theme.spacing.larger};
    font-size: ${theme.fontSizes.h3};
    color: ${isActive ? theme.colours.primary : theme.colours.text};

    &:hover {
      cursor: pointer;
    }
  `};
`;

export default HeaderMenuIcon;
