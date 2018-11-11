// @flow
import * as React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Theme } from '../../types/Theme';
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import List from '../List/List';
import Link from '../Link/Link';

import navLinks from '../../config/navLinks';
import mediaQuery from '../../styles/mediaQuery';

const HeaderStyle = styled.header`
  height: 77px;
  box-shadow: 2px 2px 11px -2px rgba(0, 0, 0, 0.3);
`;

const StyledLogo = styled(Logo)`
  margin: 0 !important;
`;

const activeClassName = `HeaderNavLink--active`;

const NavLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colours.text};
    font-size: ${theme.fontSizes.ui};
    font-weight: ${theme.fontWeight.regular};
    text-decoration: none;
    letter-spacing: 2px;
    margin-right: ${theme.spacing.medium};

    &.${activeClassName} {
      color: ${theme.colours.primary};
    }
  `};
`;

const HeaderMenuIcon = styled(MdMenu)`
  ${({ theme, isActive }: { theme: Theme, isActive: boolean }) => css`
    margin-right: ${theme.spacing.larger};
    font-size: ${theme.fontSizes.h3};
    color: ${isActive ? theme.colours.primary : theme.colours.text};

    &:hover {
      cursor: pointer;
    }
  `};
`;

const MenuIconLogoContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const NavContainer = styled(Box)`
  display: none;
  ${mediaQuery.greaterThan('small')`
    display: block;
  `};
`;

export const Header = () => (
  <HeaderStyle>
    <Wrapper>
      <Flex flexWrap="wrap" alignItems="center">
        <MenuIconLogoContainer mr="auto">
          <HeaderMenuIcon isActive={false} />
          <StyledLogo />
        </MenuIconLogoContainer>
        <NavContainer>
          <List tag="nav" unstyled>
            {navLinks.map(({ name, to, id }, i, arr) => (
              <NavLink
                exact={name === 'home'}
                tag="NavLink"
                to={to}
                key={id}
                padding={['xLarge', 'small']}
                margin={i === arr.length - 1 ? [0] : [0, 'medium', 0, 0]}
                activeClassName={activeClassName}
              >
                {name}
              </NavLink>
            ))}
          </List>
        </NavContainer>
      </Flex>
    </Wrapper>
  </HeaderStyle>
);

Header.displayName = 'Header';

export default Header;
