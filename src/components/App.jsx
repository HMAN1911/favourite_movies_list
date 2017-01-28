import React, { Component } from 'react';
import MovieSearch from './MovieSearch';
import FavouritesList from './FavouritesList';
import FavouritesSort from './FavouritesSort';
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
    this.handleSetSortBy = this.handleSetSortBy.bind(this);
  }

  handleAddToFavourites(movie) {
    this.setState({ favouriteMovies: [...this.state.favouriteMovies, movie], searchValue: '' });
    setTimeout(() => setStorage(this.state.favouriteMovies), 0);
  }

  handleRemoveFromFavourites(imdbID) {
    const movies = this.state.favouriteMovies.filter(movie => movie.imdbID !== imdbID);
    this.setState({ favouriteMovies: movies });
    setTimeout(() => setStorage(this.state.favouriteMovies), 0);
  }

  handleClearFavourites() {
    this.setState({ favouriteMovies: [] });
    setTimeout(() => setStorage(this.state.favouriteMovies), 0);
  }

  isInFavourites(imdbID) {
    return this.state.favouriteMovies.some(movie => movie.imdbID === imdbID);
  }

  handleSearchInput(value) {
    this.setState({ searchValue: value });
  }

  handleSetSortBy(e) {
    this.setState({ sortBy: e.target.value });
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
        <FavouritesSort
          setSortBy={this.handleSetSortBy}
          sortBy={this.state.sortBy}
        />
        <FavouritesList
          movies={this.state.favouriteMovies}
          removeFavourites={this.handleRemoveFromFavourites}
          clearFavourites={this.handleClearFavourites}
          sortBy={this.state.sortBy}
        />
      </div>
    );
  }
}

export default App;
