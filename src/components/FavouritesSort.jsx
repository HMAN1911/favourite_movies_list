import React, { PropTypes } from 'react';
import { SORT_OPTIONS } from '../constants';
import '../styles/FavouritesSort.scss';

const FavouritesSort = ({ setSortBy, sortBy }) => (
  <div className="FavouritesSort">
    <div className="FavouritesSort__Title">
      <h3>Favourites</h3>
    </div>
    <div className="FavouritesSort__Menu">
      <h3>Sort:</h3>
      <div className="FavouritesSort__dropdown">
        <select value={sortBy} onChange={e => setSortBy(e)}>
          {Object.keys(SORT_OPTIONS).map(k => <option key={k} value={k}>{SORT_OPTIONS[k]}</option>)}
        </select>
      </div>
    </div>
  </div>
);

FavouritesSort.propTypes = {
  setSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default FavouritesSort;
