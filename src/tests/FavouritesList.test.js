import React from 'react';
import { mount } from 'enzyme';
import FavouritesList from '../components/FavouritesList';

describe('FavouritesList component', () => {
  const setUp = () => {
    const props = {
      movies: [],
      removeFavourites: jest.fn(),
      clearFavourites: jest.fn(),
    };
    const wrapper = mount(<FavouritesList {...props} />);
    return { wrapper };
  };
  const { wrapper } = setUp();

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have props', () => {
    expect(typeof wrapper.props().movies).toEqual('object');
  });

  it('should render own elements', () => {
    expect(wrapper.find('div').hasClass('FavouritesList')).toBe(true);
  });
});
