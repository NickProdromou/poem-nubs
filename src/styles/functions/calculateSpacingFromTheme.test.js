import calculateSpacingFromTheme from './calculateSpacingFromTheme';
import theme from '../theme';

describe('calculateSpacingFromTheme [function]', () => {
  describe('error handling', () => {
    test('throws when sizes is not of array type', () => {
      expect(() => {
        calculateSpacingFromTheme('margin', 'dnfgdfg', theme());
      }).toThrowError(
        `calculateSpacingFromTheme expects sizes to be type of array'`,
      );
    });
    test('throws when sizes is not of array type', () => {
      expect(() => {
        calculateSpacingFromTheme('margin', 'dnfgdfg', theme());
      }).toThrowError(
        `calculateSpacingFromTheme expects sizes to be type of array'`,
      );
    });
    test('throws when passed an array of incorrect length', () => {
      expect(() => {
        calculateSpacingFromTheme('margin', [0, 0, 0, 0, 0], theme());
      }).toThrowError(
        'calculateSpacingFromTheme expects an array of length between 1 & 4',
      );
    });
    test('throws when rule is invalid', () => {
      expect(() => {
        calculateSpacingFromTheme('pogo', [0, 0, 0], theme());
      }).toThrowError(
        `calculateSpacingFromTheme expects rule to be either 'margin' or 'padding'`,
      );
    });
    test('throws when theme is invalid', () => {
      expect(() => {
        calculateSpacingFromTheme('padding', [0, 0, 0], {});
      }).toThrowError(
        `calculateSpacingFromTheme theme rule to be valid theme object'`,
      );
    });
  });
  describe('correct usage', () => {
    describe('when passed [0] as a size', () => {
      test('sets the margin to be 0', () => {
        const result = calculateSpacingFromTheme('margin', [0], theme());
        expect(result).toMatch(`margin: 0;`);
      });
      test('sets the padding to be 0', () => {
        const result = calculateSpacingFromTheme('padding', [0], theme());
        expect(result).toMatch(`padding: 0;`);
      });
      describe('working with theme values', () => {
        test('it sets margin/padding to be correct value based on theme', () => {
          const result = calculateSpacingFromTheme(
            'padding',
            ['xxSmall', 'small'],
            theme(),
          );
          expect(result).toMatch(
            `padding: ${theme().spacing.xxSmall} ${theme().spacing.small};`,
          );
        });
        test('it sets margin/padding to be correct value based on theme & 0 values', () => {
          const result = calculateSpacingFromTheme(
            'padding',
            [0, 'small', 'xLarge'],
            theme(),
          );
          expect(result).toMatch(
            `padding: 0 ${theme().spacing.small} ${theme().spacing.xLarge};`,
          );
        });
      });
    });
  });
});
