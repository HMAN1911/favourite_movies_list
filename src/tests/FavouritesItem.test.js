import React from 'react';
import { mount } from 'enzyme';
import FavouritesItem from '../components/FavouritesItem';

describe('FavouritesItem component', () => {
  const setUp = () => {
    const props = {
      movie: { Title: 'test', imdbRating: 'test' },
      removeFavourites: jest.fn(),
    };
    const wrapper = mount(<FavouritesItem {...props} />);
    return { wrapper };
  };
  const { wrapper } = setUp();

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render own elements', () => {
    expect(wrapper.find('li').hasClass('FavouritesItem')).toBe(true);
  });
});
