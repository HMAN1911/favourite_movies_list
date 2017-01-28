import React from 'react';
import { SORT_OPTIONS } from '../constants';

const FavouritesSort = () => (
  <div className="FavouritesSort">
    <h2>Favourites</h2>
    <span>Sort:</span>
    <div className="FavouritesSort__dropdown">
      <select>
        {Object.keys(SORT_OPTIONS).map(k => <option key={k} value={k}>{SORT_OPTIONS[k]}</option>)}
      </select>
    </div>
  </div>
);

export default FavouritesSort;
