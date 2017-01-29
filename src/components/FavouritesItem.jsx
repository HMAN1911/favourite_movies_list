import React, { PropTypes } from 'react';
import '../styles/FavouritesItem.scss';

const FavouritesItem = ({ movie, removeFavourites }) => (
  <li className="FavouritesItem">
    <div className="FavouritesItem__TextContent">
      <a href={`http://www.imdb.com/title/${movie.imdbID}`}>
        <span className="FavouritesItem__Title">{movie.Title}</span>
      </a>
      <span className="FavouritesItem__Year">({movie.Year})</span>
      <div className="FavouritesItem__imdbRating">IMDB: {movie.imdbRating}</div>
    </div>
    <div className="FavouritesItem__Interface">
      <button onClick={() => removeFavourites(movie.imdbID)}>Remove</button>
    </div>
  </li>
);

FavouritesItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
  removeFavourites: PropTypes.func.isRequired,
};

export default FavouritesItem;
