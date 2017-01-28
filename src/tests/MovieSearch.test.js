import React from 'react';
import { mount } from 'enzyme';
import MovieSearch from '../components/MovieSearch';

describe('MovieSearch component', () => {
  const setUp = () => {
    const props = {
      handleSearchInput: jest.fn(),
      searchQuery: 'test',
      isInFavourites: jest.fn(),
      addToFavourites: jest.fn(),
    };
    const wrapper = mount(<MovieSearch {...props} />);
    return { wrapper };
  };
  const { wrapper } = setUp();

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have props', () => {
    expect(typeof wrapper.props().handleSearchInput).toEqual('function');
    expect(typeof wrapper.props().searchQuery).toEqual('string');
  });

  it('should render own elements', () => {
    expect(wrapper.find('input')).toBeTruthy();
    expect(wrapper.find('div').hasClass('MovieSearch')).toBe(true);
  });
});
