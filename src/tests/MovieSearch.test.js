import React from 'react';
import { mount } from 'enzyme';
import MovieSearch from '../components/MovieSearch';

describe('MovieSearch component', () => {
  const setUp = () => {
    const props = {
      handleSearchInput: jest.fn(),
    };
    const Wrapper = mount(<MovieSearch {...props} />);
    return { Wrapper };
  };
  const { Wrapper } = setUp();

  it('should exist', () => {
    expect(Wrapper).toBeTruthy();
  });

  it('should have props', () => {
    expect(typeof Wrapper.props().handleSearchInput).toEqual('function');
  });

  it('should render own elements', () => {
    expect(Wrapper.find('input')).toBeTruthy();
    expect(Wrapper.find('div').hasClass('MovieSearch')).toBe(true);
  });
});
