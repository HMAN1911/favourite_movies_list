import React, { PropTypes } from 'react';
import FavouritesItem from './FavouritesItem';

const FavouritesList = ({ movies, removeFavourites, clearFavourites }) => (
  <div className="FavouritesList">
    <ul>
      {movies.map(movie => (
        <FavouritesItem
          key={movie.imdbID}
          removeFavourites={removeFavourites}
          movie={movie}
        />))}
    </ul>
    <button onClick={clearFavourites}>Clear</button>
  </div>
);

FavouritesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFavourites: PropTypes.func.isRequired,
  clearFavourites: PropTypes.func.isRequired,
};

export default FavouritesList;
