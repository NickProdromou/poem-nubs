// @flow
export default function truncate(width: string): string | Error {
  const regEx = /\d*?(?:px|%)/i;

  if (typeof width !== 'string') {
    throw new Error('function expected type of string');
  }

  if (!width.match(regEx)) {
    throw new Error('string passed does not match regular expression');
  }

  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}
