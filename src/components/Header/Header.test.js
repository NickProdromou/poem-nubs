import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header [Component]', () => {
  describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    test('it renders a header tag', () => {
      const headerTag = wrapper.find('header');
      expect(headerTag).toHaveLength(1);
    });
  });
});
