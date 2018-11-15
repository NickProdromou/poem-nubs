import { spacing } from './themeProps';
import createSelectKnob from './createSelectKnob';

export default function createBoxModel(titlePrefix, group) {
  const spacingWithZero = [0, ...spacing];
  const top = createSelectKnob(
    `${titlePrefix} top`,
    spacingWithZero,
    '0',
    group,
  );
  const right = createSelectKnob(
    `${titlePrefix} right`,
    spacingWithZero,
    '0',
    group,
  );
  const bottom = createSelectKnob(
    `${titlePrefix} bottom`,
    spacingWithZero,
    '0',
    group,
  );
  const left = createSelectKnob(
    `${titlePrefix} left`,
    spacingWithZero,
    '0',
    group,
  );
  return [top, right, bottom, left];
}
