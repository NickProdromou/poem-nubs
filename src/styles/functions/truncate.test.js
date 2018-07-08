import truncate from './truncate';

describe('truncate [function]', () => {
  test('throws an error when not passed a string', () => {
    expect(() => {
      truncate(100);
    }).toThrowError('function expected type of string');
  });

  test('throws an error when string does not match regular expression', () => {
    expect(() => {
      truncate('300');
    }).toThrowError('string passed does not match regular expression');
  });

  test('returns a string', () => {
    expect(typeof truncate('100px')).toBe('string');
  });

  test('returns correct css string', () => {
    expect(truncate('150px')).toMatch(`
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `);
  });
});
