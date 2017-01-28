import React, { PropTypes } from 'react';

const FavouritesItem = ({ movie }) => (
  <li className="FavouritesItem">
    <div>{movie.Title}({movie.Year})</div>
    <div>IMDB: {movie.imdbRating}</div>
    <button>Remove</button>
  </li>
);

FavouritesItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FavouritesItem;
