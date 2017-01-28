import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import ResultsList from './ResultsList';
import { DEBOUNCE_DELAY_MS } from '../constants';

class MovieSearch extends Component {
  constructor() {
    super();
    this.clearAndAddToFavourites = this.clearAndAddToFavourites.bind(this);
  }

  clearAndAddToFavourites(movie) {
    this.props.addToFavourites(movie);
    this.searchBar.value = '';
  }

  render() {
    const { handleSearchInput, isInFavourites, searchQuery } = this.props;
    const debounceInput = debounce(() => {
      handleSearchInput(this.searchBar.value);
    }, DEBOUNCE_DELAY_MS);

    return (
      <div className="MovieSearch">
        <input
          ref={ref => (this.searchBar = ref)}
          placeholder="search for a movie..."
          type="text"
          onInput={debounceInput}
        />
        {
          searchQuery
          ? <ResultsList
            searchQuery={searchQuery}
            isInFavourites={isInFavourites}
            addToFavourites={this.clearAndAddToFavourites}
          />
          : null
        }
      </div>
    );
  }
}

MovieSearch.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  isInFavourites: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default MovieSearch;
