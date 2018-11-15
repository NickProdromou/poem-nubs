import styled, { css } from 'styled-components';
import Link from '../link';

export default function NavLink(activeClassName) {
  return styled(Link)`
    ${({ theme }) => css`
      color: ${theme.colours.neutral.darkest};
      font-size: ${theme.fontSizes.ui};
      font-weight: ${theme.fontWeight.regular};
      text-decoration: none;
      letter-spacing: 2px;
      margin-right: ${theme.spacing.medium};

      &.${activeClassName} {
        color: ${theme.colours.primary.light};
      }
    `};
  `;
}
