import styled from 'styled-components';
import { Box } from '@rebass/grid';
import mediaQuery from '../../styles/functions/mediaQuery';

const NavContainer = styled(Box)`
  display: none;
  ${mediaQuery.greaterThan('small')`
    display: block;
  `};
`;

export default NavContainer;
