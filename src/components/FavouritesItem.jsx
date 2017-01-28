import React, { PropTypes } from 'react';

const FavouritesItem = ({ movie, removeFavourites }) => (
  <li className="FavouritesItem">
    <div>{movie.Title}({movie.Year})</div>
    <div>IMDB: {movie.imdbRating}</div>
    <button onClick={() => removeFavourites(movie.imdbID)}>Remove</button>
  </li>
);

FavouritesItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
  removeFavourites: PropTypes.func.isRequired,
};

export default FavouritesItem;
