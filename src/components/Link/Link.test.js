import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Link as ReactRouterLink, BrowserRouter } from 'react-router-dom';
import 'jest-styled-components';

import Link from './Link';
import theme from '../../styles/theme';

const testWrapperWithTheme = testProps =>
  mount(
    <ThemeProvider theme={theme()}>
      <Link {...testProps} />
    </ThemeProvider>,
  );

const testWrapperWithRouter = testProps =>
  mount(
    <BrowserRouter>
      <React.Fragment>
        <ThemeProvider theme={theme()}>
          <Link {...testProps} />
        </ThemeProvider>,
      </React.Fragment>
    </BrowserRouter>,
  );

describe('Link [Component]', () => {
  describe('rendering', () => {
    describe('props', () => {
      describe('defaultProps', () => {
        let wrapper;
        let props = {};
        beforeEach(() => {
          wrapper = testWrapperWithTheme(props);
        });

        afterEach(() => {
          props = {};
        });

        test('it renders an <a> tag', () => {
          const aTag = wrapper.find('a');
          expect(aTag).toHaveLength(1);
        });
        test('it sets the margin to 0', () => {
          expect(wrapper).toHaveStyleRule('margin', '0');
        });
        test('it sets the margin to 0', () => {
          expect(wrapper).toHaveStyleRule('padding', '0');
        });
      });
    });
    describe('tag prop', () => {
      let wrapperWithRouter;
      let wrapperWithTheme;
      let props = {};

      describe(`when tag is 'Link'`, () => {
        beforeEach(() => {
          props.tag = 'Link';
          props.to = '/';
          wrapperWithRouter = testWrapperWithRouter(props);
        });

        afterEach(() => {
          props = {};
        });

        test('it renders a Link component from react-router-dom', () => {
          expect(wrapperWithRouter.find(ReactRouterLink)).toHaveLength(1);
        });
        test(`it sets the 'to' prop on the Link from react-router-dom`, () => {
          const expectedProp = '/';

          expect(wrapperWithRouter.find(ReactRouterLink).props().to).toBe(
            expectedProp,
          );
        });
      });
      describe(`when tag is 'a'`, () => {
        beforeEach(() => {
          props.tag = 'a';
          props.href = 'http://externallink.com';
          wrapperWithTheme = testWrapperWithTheme(props);
        });

        afterEach(() => {
          props = {};
        });

        test('it renders an <a> tag', () => {
          const aTag = wrapperWithTheme.find('a');
          expect(aTag).toHaveLength(1);
        });
        test('it sets the href attribute on the a tag', () => {
          const aTag = wrapperWithTheme.find('a');
          const expectedProp = 'http://externallink.com';

          expect(aTag.prop('href')).toBe(expectedProp);
        });
      });
    });
    describe('style props', () => {
      let props = {};
      let wrapperWithTheme;

      describe('margin', () => {
        beforeEach(() => {
          props.margin = ['small', 'medium'];
          wrapperWithTheme = testWrapperWithTheme(props);
        });
        afterEach(() => {
          props = {};
        });
        test('it sets margin correct based on props using theme values', () => {
          expect(wrapperWithTheme).toHaveStyleRule(
            'margin',
            `${theme().spacing.small} ${theme().spacing.medium}`,
          );
        });
      });
      describe('padding', () => {
        beforeEach(() => {
          props.padding = ['xSmall', 'xxSmall'];
          wrapperWithTheme = testWrapperWithTheme(props);
        });
        afterEach(() => {
          props = {};
        });
        test('it sets margin correct based on props using theme values', () => {
          expect(wrapperWithTheme).toHaveStyleRule(
            'padding',
            `${theme().spacing.xSmall} ${theme().spacing.xxSmall}`,
          );
        });
      });
    });
  });
});
