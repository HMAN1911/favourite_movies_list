import React, { PropTypes } from 'react';
import FavouritesItem from './FavouritesItem';

const FavouritesList = ({ movies }) => (
  <div className="FavouritesList">
    <ul>
      {movies.map(movie => (
        <FavouritesItem
          key={movie.imdbID}
          movie={movie}
        />))}
    </ul>
    <button>Clear</button>
  </div>
);

FavouritesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavouritesList;
