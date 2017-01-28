import React from 'react';
import { mount } from 'enzyme';
import FavouritesSort from '../components/FavouritesSort';
import { SORT_OPTIONS } from '../constants';

describe('FavouritesSort component', () => {
  const setUp = () => {
    const props = {
      setSortBy: jest.fn(),
      sortBy: 'Title_Asc',
    };
    const wrapper = mount(<FavouritesSort {...props} />);
    return { wrapper };
  };
  const { wrapper } = setUp();

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render own elements', () => {
    expect(wrapper.find('option').length).toEqual(Object.keys(SORT_OPTIONS).length);
  });
});
