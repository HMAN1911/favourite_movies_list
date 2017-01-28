import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import ResultsList from './ResultsList';

class MovieSearch extends Component {
  render() {
    const { handleSearchInput, searchQuery } = this.props;
    const debounceInput = debounce(() => {
      handleSearchInput(this.searchBar.value);
    }, 700);

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
          />
          : null
        }
      </div>
    );
  }
}

MovieSearch.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default MovieSearch;
