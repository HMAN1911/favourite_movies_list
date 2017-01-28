import React from 'react';
import { shallow } from 'enzyme';
import FetchError from '../components/FetchError';

describe('FetchError Component', () => {
  const error = { error: 'fail' };
  const wrapper = shallow(<FetchError reason={error} />);

  it('should render error message within code element', () => {
    expect(wrapper.find('code').text()).toEqual(error.toString());
  });
});
