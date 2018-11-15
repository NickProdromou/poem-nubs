import React from 'react';
import { shallow } from 'enzyme';

import Logo from './logo';
import Text from '../text';

describe('Logo [Component]', () => {
  describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Logo />);
    });

    test('it renders a <Text/> component ', () => {
      const logoText = wrapper.find(Text);
      expect(logoText).toHaveLength(1);
    });
  });
});
