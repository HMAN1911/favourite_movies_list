import React from 'react';
import { shallow } from 'enzyme';
import { PromiseState } from 'react-refetch';
import { ResultsListUnconnected } from '../components/ResultsList';
import FetchError from '../components/FetchError';

describe('ResultsList component unconnected', () => {
  it('renders nothing when promise state is pending', () => {
    const wrapper = shallow(
      <ResultsListUnconnected moviesFetch={PromiseState.create()} />,
    );
    expect(wrapper.get(0)).toBe(null);
  });

  it('should render ResultsList component when promise state is fulfilled', () => {
    const mockResponse = { Search: [] };
    const wrapper = shallow(
      <ResultsListUnconnected moviesFetch={PromiseState.resolve(mockResponse)} />,
    );
    expect(wrapper.find('div').hasClass('ResultsList')).toBe(true);
  });

  it('should render FetchError component when promise state is rejected', () => {
    const expectedError = { error: 'fail' };
    const wrapper = shallow(
      <ResultsListUnconnected moviesFetch={PromiseState.reject(expectedError)} />,
    );
    expect(wrapper.find(FetchError)).toBeTruthy();
  });
});
