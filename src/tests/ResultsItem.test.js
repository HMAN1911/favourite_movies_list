import React from 'react';
import { shallow } from 'enzyme';
import { PromiseState } from 'react-refetch';
import { ResultsItemUnconnected } from '../components/ResultsItem';
import FetchError from '../components/FetchError';

describe('ResultsItem component unconnected', () => {
  it('renders a li with a disabled button when promise state is pending', () => {
    const wrapper = shallow(
      <ResultsItemUnconnected movieFetch={PromiseState.create()} />,
    );
    expect(wrapper.find('span')).toBeTruthy();
  });

  it('should render ResultsItem component when promise state is fulfilled', () => {
    const mockResponse = { Title: 'Test' };
    const wrapper = shallow(
      <ResultsItemUnconnected movieFetch={PromiseState.resolve(mockResponse)} />,
    );
    expect(wrapper.find('li').hasClass('ResultsItem')).toBe(true);
  });

  it('should render FetchError component when promise state is rejected', () => {
    const expectedError = { error: 'fail' };
    const wrapper = shallow(
      <ResultsItemUnconnected movieFetch={PromiseState.reject(expectedError)} />,
    );
    expect(wrapper.find(FetchError)).toBeTruthy();
  });
});
