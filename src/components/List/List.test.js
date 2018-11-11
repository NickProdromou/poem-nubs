import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import theme from '../../styles/theme';
import List from './List';

describe('List [Component]', () => {
  describe('rendering', () => {
    describe('without props', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(
          <ThemeProvider theme={theme()}>
            <List tag="ul" />
          </ThemeProvider>,
        );
      });

      test('it renders a <ul> tag', () => {
        const navTag = wrapper.find(List);
        expect(navTag).toHaveLength(1);
      });
    });

    describe('with props', () => {
      let wrapper;

      beforeEach(() => {
        const padding = ['xxSmall', 'small', 'medium', 'small'];
        const margin = ['small', 'small', 'small', 'small'];

        wrapper = mount(
          <ThemeProvider theme={theme()}>
            <List tag="ul" padding={padding} margin={margin} />
          </ThemeProvider>,
        );
      });

      test('it sets padding correct based on props using theme values', () => {
        const { xxSmall, small, medium } = theme().spacing;
        expect(wrapper).toHaveStyleRule(
          'padding',
          `${xxSmall} ${small} ${medium} ${small}`,
        );
      });

      test('it sets margin correct based on props using theme values', () => {
        const { small } = theme().spacing;

        expect(wrapper).toHaveStyleRule(
          'margin',
          `${small} ${small} ${small} ${small}`,
        );
      });

      test('it sets list-style-type based on default props', () => {
        expect(wrapper).toHaveStyleRule('list-style-type', `initial`);
      });
    });

    describe('with children', () => {
      let wrapper;
      let items;

      beforeEach(() => {
        items = [
          { text: 'list item', id: 11234 },
          { text: 'list item', id: 123 },
          { text: 'list item', id: 1234 },
          { text: 'list item', id: 234 },
          { text: 'list item', id: 134 },
        ];

        wrapper = mount(
          <ThemeProvider theme={theme()}>
            <List tag="ul">
              {items.map((item, index) => (
                <li key={item.id}>{`${item} ${index}`}</li>
              ))}
            </List>
          </ThemeProvider>,
        );
      });

      test('it renders children correctly', () => {
        const children = wrapper.find('ul').children();
        expect(children).toHaveLength(items.length);
      });
    });
  });
});
