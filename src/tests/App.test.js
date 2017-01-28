import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import MovieSearch from '../components/MovieSearch';

describe('App component', () => {
  it('should render MovieSearch component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MovieSearch)).toBeTruthy();
  });
});
