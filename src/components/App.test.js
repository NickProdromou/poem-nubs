import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      appName: 'Poem nubs',
    };
    wrapper = shallow(<App {...props} />);
  });

  describe('rendering', () => {
    test('renders a div', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });

    test('rendered div contains the correct text', () => {
      expect(wrapper.find('div').text()).toBe('Poem nubsworks');
    });
  });
});
