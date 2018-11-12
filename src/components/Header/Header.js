// @flow
import * as React from 'react';
import { Flex } from '@rebass/grid';

import navLinks from '../../config/navLinks';
import Wrapper from '../Wrapper/Wrapper';
import List from '../List/List';

import NavContainer from './NavContainer';
import NavLinkFactory from './NavLink';
import MenuIconContainer from './MenuIconContainer';
import MenuIcon from './MenuIcon';
import HeaderStyle from './HeaderStyle';
import SiteLogo from './SiteLogo';

const activeClassName = `HeaderNavLink--active`;
const NavLink = NavLinkFactory(activeClassName);

export const Header = () => (
  <HeaderStyle>
    <Wrapper>
      <Flex flexWrap="wrap" alignItems="center">
        <MenuIconContainer mr="auto">
          <MenuIcon isActive={false} />
          <SiteLogo />
        </MenuIconContainer>
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
