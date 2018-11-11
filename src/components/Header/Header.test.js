import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import Wrapper from '../Wrapper/Wrapper';

import List from '../List/List';

describe.only('header [Component]', () => {
  describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />).dive();
    });

    test('it renders a styled header tag', () => {
      const headerTag = wrapper.find('header');
      expect(headerTag).toHaveLength(1);
    });

    test('it renders a <Wrapper/> Component', () => {
      const headerTag = wrapper.find('Wrapper');
      const headerWrapper = headerTag.find(Wrapper);
      expect(headerWrapper).toHaveLength(1);
    });

    test('it renders a <Logo/> Component', () => {
      const headerLogo = wrapper.find('Header__StyledLogo');
      expect(headerLogo).toHaveLength(1);
    });

    test('it renders a <List/> Component', () => {
      const ListComponent = wrapper.find(List);
      expect(ListComponent).toHaveLength(1);
    });
  });
});
