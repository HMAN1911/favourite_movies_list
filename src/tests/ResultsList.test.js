import React from 'react';
import { shallow } from 'enzyme';
import { PromiseState } from 'react-refetch';
import { ResultsListUnconnected } from '../components/ResultsList';
import FetchError from '../components/FetchError';

describe('ResultsList component unconnected', () => {
  const props = {
    isInFavourites: jest.fn(),
    addToFavourites: jest.fn(),
  };

  it('renders nothing when promise state is pending', () => {
    const wrapper = shallow(
      <ResultsListUnconnected moviesFetch={PromiseState.create()} {...props} />,
    );
    expect(wrapper.get(0)).toBe(null);
  });

  it('should render ResultsList component when promise state is fulfilled', () => {
    const mockResponse = { Search: [] };
    const wrapper = shallow(
      <ResultsListUnconnected moviesFetch={PromiseState.resolve(mockResponse)} {...props} />,
    );
    expect(wrapper.find('div').hasClass('ResultsList')).toBe(true);
  });

  it('should render FetchError component when promise state is rejected', () => {
    const expectedError = { error: 'fail' };
    const wrapper = shallow(
      <ResultsListUnconnected moviesFetch={PromiseState.reject(expectedError)} {...props} />,
    );
    expect(wrapper.find(FetchError)).toBeTruthy();
  });
});
