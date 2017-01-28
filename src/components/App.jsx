import React, { Component } from 'react';
import MovieSearch from './MovieSearch';
import FavouritesList from './FavouritesList';
import initialState, { setStorage } from '../initialState';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleAddToFavourites = this.handleAddToFavourites.bind(this);
    this.handleRemoveFromFavourites = this.handleRemoveFromFavourites.bind(this);
    this.handleClearFavourites = this.handleClearFavourites.bind(this);
    this.isInFavourites = this.isInFavourites.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentWillMount() {
    // turn the string in localStorage to a JS Object
    // App never unmounts, so this will only happen once.
    if (typeof this.state.favouriteMovies === 'string') {
      this.setState({ favouriteMovies: JSON.parse(this.state.favouriteMovies) });
    }
  }

  handleAddToFavourites(movie) {
    this.setState({ favouriteMovies: [...this.state.favouriteMovies, movie], searchValue: '' });
    setStorage(this.state.favouriteMovies);
  }

  handleRemoveFromFavourites(imdbID) {
    const movies = this.state.favouriteMovies.filter(movie => movie.imdbID !== imdbID);
    this.setState({ favouriteMovies: movies });
    setStorage(this.state.favouriteMovies);
  }

  handleClearFavourites() {
    this.setState({ favouriteMovies: [] });
    setStorage(this.state.favouriteMovies);
  }

  isInFavourites(imdbID) {
    return this.state.favouriteMovies.some(movie => movie.imdbID === imdbID);
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
          addToFavourites={this.handleAddToFavourites}
          isInFavourites={this.isInFavourites}
        />
        <FavouritesList
          movies={this.state.favouriteMovies}
        />
      </div>
    );
  }
}

export default App;
