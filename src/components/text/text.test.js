import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Text from './text';
import 'jest-styled-components';

describe('Text [component]', () => {
  describe('rendering', () => {
    describe('when passed no props', () => {
      test('renders a <p> tag', () => {
        const wrapper = mount(
          <ThemeProvider theme={theme()}>
            <Text tag="p">some text</Text>
          </ThemeProvider>,
        );
        const pTag = wrapper.find('p');
        expect(pTag).toHaveLength(1);
      });
      test('renders with default styles from theme', () => {
        const component = mount(
          <ThemeProvider theme={theme()}>
            <Text>Some text inside the text component</Text>
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
            <Text>
              Some text inside the text component{' '}
              <Text tag="span">this will be in a span tag</Text>
            </Text>
          </ThemeProvider>,
        );
        const pTag = component.find('p');
        expect(pTag.find('span')).toHaveLength(1);
      });
    });
    describe('with props', () => {
      test('renders with correct styles from theme based on props', () => {
        const component = mount(
          <ThemeProvider theme={theme()}>
            <Text
              colour={{ type: 'primary', shade: 'dark' }}
              lineHeight="h3"
              size="ui"
              italic="true"
              font="heading"
            >
              Some text inside the text component{' '}
            </Text>
          </ThemeProvider>,
        );
        expect(component).toHaveStyleRule(
          'color',
          theme().colours.primary.dark,
        );
        expect(component).toHaveStyleRule('line-height', theme().lineHeight.h3);
        expect(component).toHaveStyleRule('font-size', theme().fontSizes.ui);
        expect(component).toHaveStyleRule('font-style', 'italic');
        expect(component).toHaveStyleRule('font-family', theme().fonts.heading);
      });
    });
  });
});
