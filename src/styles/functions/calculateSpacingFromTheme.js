// @flow
import { type Interpolation } from 'styled-components';
import { type Theme } from '../../types/theme';
import { type BoxModel } from '../../types/boxModel';

export default function calculateSpacingFromTheme(
  rule: 'margin' | 'padding',
  sizes: BoxModel,
  theme: Theme,
): Interpolation | void {
  if (!Array.isArray(sizes)) {
    throw new Error(
      `calculateSpacingFromTheme expects sizes to be type of array'`,
    );
  }

  if (sizes.length > 4 && sizes.length > 0) {
    throw new Error(
      'calculateSpacingFromTheme expects an array of length between 1 & 4',
    );
  }

  if (!['margin', 'padding'].includes(rule)) {
    throw new Error(
      `calculateSpacingFromTheme expects rule to be either 'margin' or 'padding'`,
    );
  }

  if (!theme.spacing) {
    throw new Error(
      `calculateSpacingFromTheme theme rule to be valid theme object'`,
    );
  }

  return `${rule}:${sizes.reduce((value, size) => {
    let newValue;

    if (size === '0' || size === 0) {
      newValue = `${value} ${Number(size)}`;
    } else {
      newValue = `${value} ${theme.spacing[size]}`;
    }
    return newValue;
  }, '')};`;
}
