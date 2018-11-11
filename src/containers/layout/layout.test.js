import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';
import AppHeader from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

describe('Layout [Container]', () => {
  describe('rendering', () => {
    describe('without passed children', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<Layout />);
      });

      test('it renders a wrapping <div/>', () => {
        const divTag = wrapper.find('div');
        expect(divTag).toHaveLength(1);
      });

      test('it renders a <Header /> component', () => {
        const header = wrapper.find(AppHeader);
        expect(header).toHaveLength(1);
      });

      test('it renders a <main />', () => {
        const main = wrapper.find('main');
        expect(main).toHaveLength(1);
      });

      test('it renders a <Footer /> component', () => {
        const footer = wrapper.find(Footer);
        expect(footer).toHaveLength(1);
      });
    });

    describe('with passed children', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(
          <Layout>
            <div />
          </Layout>,
        );
      });

      test('it renders children within a main tag', () => {
        const main = wrapper.find('main');
        const childDiv = main.find('div');
        expect(childDiv).toHaveLength(1);
      });
    });
  });
});
