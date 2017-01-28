import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';

class MovieSearch extends Component {
  render() {
    const { handleSearchInput } = this.props;
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
      </div>
    );
  }
}

MovieSearch.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
};

export default MovieSearch;
