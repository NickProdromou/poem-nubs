// @flow
import { select } from '@storybook/addon-knobs';

export default function createSelectKnob(
  label: string,
  values: Array<any>,
  defaultValue: any,
  groupId: any,
): Function {
  return select(
    label,
    values.reduce((acc, val) => {
      const newAccum = {
        ...acc,
        [val]: val,
      };
      return newAccum;
    }, {}),
    defaultValue,
    groupId || '',
  );
}
