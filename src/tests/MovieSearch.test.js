import React from 'react';
import { shallow } from 'enzyme';
import MovieSearch from '../components/MovieSearch';

describe('MovieSearch component', () => {
  it('should contain a div with classname MovieSearch', () => {
    const wrapper = shallow(<MovieSearch />);
    expect(wrapper.find('div').hasClass('MovieSearch')).toBe(true);
  });
  it('should contain an input tag', () => {
    const wrapper = shallow(<MovieSearch />);
    expect(wrapper.find('input')).toBeTruthy();
  });
});
