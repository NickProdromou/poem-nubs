import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer [Component]', () => {
  describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Footer />);
    });

    test('it renders a <footer/> tag', () => {
      const footerTag = wrapper.find('footer');
      expect(footerTag).toHaveLength(1);
    });
  });
});
