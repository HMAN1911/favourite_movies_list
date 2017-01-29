import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import initialState from '../initialState';

describe('App Component', () => {
  const wrapper = shallow(<App />);

  it('should render children', () => {
    expect(typeof wrapper.props().children).toBe('object');
  });
});

describe('App Component initial State', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should initialise with searchValue as empty string', () => {
    expect(wrapper.state().searchValue).toEqual('');
  });

  it('should initialise with sortyBy set to Title_Asc', () => {
    expect(wrapper.state().sortBy).toEqual('Title_Asc');
  });

  it('should initialise with favouriteMovies set to empty array', () => {
    expect(wrapper.state().favouriteMovies.length).toEqual(0);
    expect(typeof wrapper.state().favouriteMovies).toEqual('object');
  });
});

describe('App Component Method #addToFavourites', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should update state when called', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbID: 123 };
    wrapper.instance().handleAddToFavourites(testMovie);
    expect(wrapper.state().favouriteMovies[0].Title).toEqual('test');
  });
});

describe('App Component Method #handleSearchInput', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should update state with provided string', () => {
    wrapper.instance().handleSearchInput('test query');
    expect(wrapper.state().searchValue).toEqual('test query');
  });
});

describe('App Component Method #handleSetSortBy', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should update state when provided an event object', () => {
    const testEvent = { target: { value: 'Title_Desc' } };
    wrapper.instance().handleSetSortBy(testEvent);
    expect(wrapper.state().sortBy).toEqual('Title_Desc');
  });
});

describe('App Component Method #handleClearFavourites', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should clear favouriteMovies in state', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbID: 123 };
    wrapper.instance().handleAddToFavourites(testMovie);
    wrapper.instance().handleClearFavourites();
    expect(wrapper.state().favouriteMovies.length).toEqual(0);
  });
});

describe('App Component Method #isInFavourites', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('returns true if provided film is present in favouriteMovies', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbID: 123 };
    wrapper.instance().handleAddToFavourites(testMovie);
    expect(wrapper.instance().isInFavourites(123)).toBe(true);
  });

  it('returns false if provided film is not present in favouriteMovies', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbID: 123 };
    wrapper.instance().handleAddToFavourites(testMovie);
    expect(wrapper.instance().isInFavourites(456)).toBe(false);
  });
});

describe('App Component Method #handleRemoveFromFavourites', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(initialState);

  it('should remove provided imdbID object from favouriteMovies array', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbID: 123 };
    const testAnotherMovie = { Title: 'another', Year: 'test', imdbID: 456 };
    wrapper.instance().handleAddToFavourites(testMovie);
    wrapper.instance().handleAddToFavourites(testAnotherMovie);
    wrapper.instance().handleRemoveFromFavourites(123);
    expect(wrapper.state().favouriteMovies).toContainEqual(testAnotherMovie);
  });

  it('should return an identical array if imdbID not present in array', () => {
    const testMovie = { Title: 'test', Year: 'test', imdbID: 123 };
    const testAnotherMovie = { Title: 'another', Year: 'test', imdbID: 456 };
    wrapper.instance().handleAddToFavourites(testMovie);
    wrapper.instance().handleAddToFavourites(testAnotherMovie);
    wrapper.instance().handleRemoveFromFavourites(789);
    expect(wrapper.state().favouriteMovies).toContainEqual(testAnotherMovie);
    expect(wrapper.state().favouriteMovies).toContainEqual(testMovie);
  });
});
