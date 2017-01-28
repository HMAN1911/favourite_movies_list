import React from 'react';
import { shallow } from 'enzyme';
import { PromiseState } from 'react-refetch';
import { ResultsItemUnconnected } from '../components/ResultsItem';
import FetchError from '../components/FetchError';

describe('ResultsItem component unconnected', () => {
  const props = {
    isInFavourites: jest.fn(),
    addToFavourites: jest.fn(),
  };
  it('renders a li with a disabled button when promise state is pending', () => {
    const wrapper = shallow(
      <ResultsItemUnconnected movieFetch={PromiseState.create()} {...props} />,
    );
    expect(wrapper.find('span')).toBeTruthy();
  });

  it('should render ResultsItem component when promise state is fulfilled', () => {
    const mockResponse = { Title: 'Test' };
    const wrapper = shallow(
      <ResultsItemUnconnected movieFetch={PromiseState.resolve(mockResponse)} {...props} />,
    );
    expect(wrapper.find('li').hasClass('ResultsItem')).toBe(true);
  });

  it('should render FetchError component when promise state is rejected', () => {
    const expectedError = { error: 'fail' };
    const wrapper = shallow(
      <ResultsItemUnconnected movieFetch={PromiseState.reject(expectedError)} {...props} />,
    );
    expect(wrapper.find(FetchError)).toBeTruthy();
  });
});
