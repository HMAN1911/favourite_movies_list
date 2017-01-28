import React, { Component } from 'react';
import MovieSearch from './MovieSearch';
import FavouritesList from './FavouritesList';
import initialState from '../initialState';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentWillMount() {
    // turn the string in localStorage to a JS Object
    // App never unmounts, so this will only happen once.
    if (typeof this.state.favouriteMovies === 'string') {
      this.setState({ favouriteMovies: JSON.parse(this.state.favouriteMovies) });
    }
  }

  handleSearchInput(value) {
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <div className="App">
        <MovieSearch
          handleSearchInput={this.handleSearchInput}
          searchQuery={this.state.searchValue}
        />
        <FavouritesList
          movies={this.state.favouriteMovies}
        />
      </div>
    );
  }
}

export default App;
