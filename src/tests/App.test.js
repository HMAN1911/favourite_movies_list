import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App Component', () => {
  const wrapper = shallow(<App />);

  it('should render children', () => {
    expect(typeof wrapper.props().children).toBe('object');
  });
});
