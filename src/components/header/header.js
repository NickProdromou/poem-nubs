// @flow
import * as React from 'react';
import { Flex } from '@rebass/grid';

import navLinks from '../../config/navLinks';
import Wrapper from '../wrapper';
import List from '../list';

import NavContainer from './navContainer';
import NavLinkFactory from './navLink';
import MenuIconContainer from './menuIconContainer';
import MenuIcon from './menuIcon';
import HeaderStyle from './headerStyle';
import SiteLogo from './siteLogo';

const activeClassName = `HeaderNavLink--active`;
const NavLink = NavLinkFactory(activeClassName);

const Header = () => (
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
