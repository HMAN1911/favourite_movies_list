import React, { Component } from 'react';

class MovieSearch extends Component {
  render() {
    return (
      <div className="MovieSearch">
        <input
          ref={ref => (this.searchBar = ref)}
          placeholder="search for a movie..."
          type="text"
        />
      </div>
    );
  }
}

export default MovieSearch;
