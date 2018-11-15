import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import Wrapper from './wrapper';
import theme from '../../styles/theme';

describe('Layout [Container]', () => {
  describe('rendering', () => {
    describe('with passed children', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(
          <ThemeProvider theme={theme()}>
            <Wrapper>
              <article />
            </Wrapper>
          </ThemeProvider>,
        );
      });

      test('It should render a <Wrapper />', () => {
        const wrappingTag = wrapper.find('Wrapper');
        expect(wrappingTag).toHaveLength(1);
      });

      test('It should wrap a child element inside a <div/>', () => {
        const divTag = wrapper.find('Wrapper');
        const nestedEl = divTag.find('article');
        expect(nestedEl).toHaveLength(1);
      });
    });

    describe('with default style', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(
          <ThemeProvider theme={theme()}>
            <Wrapper />
          </ThemeProvider>,
        );
      });

      test('it constrains the width of the child to max-width of 1024px', () => {
        const wrapperEl = wrapper.find('Wrapper');
        expect(wrapperEl).toHaveStyleRule('max-width', '1024px');
      });

      test('it has correct gutter width based on theme spacing', () => {
        const wrapperEl = wrapper.find('Wrapper');
        expect(wrapperEl).toHaveStyleRule(
          'padding',
          `0 ${theme().spacing.larger}`,
        );
      });
    });

    describe('with different props to the default', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(
          <ThemeProvider theme={theme()}>
            <Wrapper constrain={false} colour="primary" />
          </ThemeProvider>,
        );
      });

      test('with constrain set to false', () => {
        expect(wrapper).toHaveStyleRule('max-width', '100%');
      });
    });
  });
});
