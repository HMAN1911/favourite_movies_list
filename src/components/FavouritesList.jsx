import React, { PropTypes } from 'react';
import FavouritesItem from './FavouritesItem';
import sortMovies from '../utils';
import '../styles/FavouritesList.scss';

const FavouritesList = ({ movies, removeFavourites, clearFavourites, sortBy }) => {
  const sorted = sortMovies(movies, sortBy);
  return (
    <div className="FavouritesList">
      <ul>
        {sorted.map(movie => (
          <FavouritesItem
            key={movie.imdbID}
            removeFavourites={removeFavourites}
            movie={movie}
          />))}
      </ul>
      <div className="FavouritesList__Interface">
        <button onClick={clearFavourites}>Clear</button>
      </div>
    </div>
  );
};

FavouritesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFavourites: PropTypes.func.isRequired,
  clearFavourites: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default FavouritesList;
