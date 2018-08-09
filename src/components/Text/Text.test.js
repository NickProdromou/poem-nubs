import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Text from './Text';
import 'jest-styled-components';

describe('Text [component]', () => {
  describe('rendering', () => {
    describe('when passed no props', () => {
      test('renders a <p> tag', () => {
        const wrapper = mount(
          <ThemeProvider theme={theme()}>
            <Text.p>some text</Text.p>
          </ThemeProvider>,
        );
        const pTag = wrapper.find('p');
        expect(pTag).toHaveLength(1);
      });
      test('renders with default styles from theme', () => {
        const component = mount(
          <ThemeProvider theme={theme()}>
            <Text.p>Some text inside the text component</Text.p>
          </ThemeProvider>,
        );
        const nestedTag = component.find('p');
        expect(nestedTag).toHaveStyleRule('font-size', theme().fontSizes.ui);
        expect(nestedTag).toHaveStyleRule('font-weight', 'normal');
        expect(nestedTag).toHaveStyleRule('font-style', 'normal');
        expect(nestedTag).toHaveStyleRule('line-height', theme().lineHeight.ui);
        expect(nestedTag).toHaveStyleRule('font-family', theme().fonts.body);
      });
    });
    describe('nesting', () => {
      test('renders a nested <span> within a <p> tag', () => {
        const component = mount(
          <ThemeProvider theme={theme()}>
            <Text.p>
              Some text inside the text component{' '}
              <Text.span>this will be in a span tag</Text.span>
            </Text.p>
          </ThemeProvider>,
        );
        const pTag = component.find('p');
        expect(pTag.find('span')).toHaveLength(1);
      });
    });
  });
});
