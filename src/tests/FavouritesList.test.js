import React from 'react';
import { mount } from 'enzyme';
import FavouritesList from '../components/FavouritesList';

describe('FavouritesList component', () => {
  const setUp = () => {
    const props = {
      movies: [],
      removeFavourites: jest.fn(),
      clearFavourites: jest.fn(),
      sortBy: 'Title_Asc',
    };
    const wrapper = mount(<FavouritesList {...props} />);
    return { wrapper };
  };
  const { wrapper } = setUp();

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render own elements', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should display confirm button if confirm flag is enabled', () => {
    wrapper.instance().toggleConfirm();
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('button.FavouritesList--confirm').length).toEqual(1);
  });

  it('should hide confirm button if confirm flag is disabled', () => {
    wrapper.instance().toggleConfirm();
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('button.FavouritesList--confirm').length).toEqual(0);
  });
});

describe('FavouritesList Method #toggleConfirm', () => {
  const setUp = () => {
    const props = {
      movies: [],
      removeFavourites: jest.fn(),
      clearFavourites: jest.fn(),
      sortBy: 'Title_Asc',
    };
    const wrapper = mount(<FavouritesList {...props} />);
    return { wrapper };
  };

  it('should toggle confirm boolean when called', () => {
    const { wrapper } = setUp();
    wrapper.instance().toggleConfirm();
    expect(wrapper.state().confirm).toBe(true);
    wrapper.instance().toggleConfirm();
    expect(wrapper.state().confirm).toBe(false);
  });
});
