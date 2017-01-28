import React, { PropTypes } from 'react';
import { SORT_OPTIONS } from '../constants';

const FavouritesSort = ({ setSortBy, sortBy }) => (
  <div className="FavouritesSort">
    <h2>Favourites</h2>
    <span>Sort:</span>
    <div className="FavouritesSort__dropdown">
      <select value={sortBy} onChange={e => setSortBy(e)}>
        {Object.keys(SORT_OPTIONS).map(k => <option key={k} value={k}>{SORT_OPTIONS[k]}</option>)}
      </select>
    </div>
  </div>
);

FavouritesSort.propTypes = {
  setSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default FavouritesSort;
