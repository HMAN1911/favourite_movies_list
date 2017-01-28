import React, { PropTypes } from 'react';

const FavouritesList = ({ movies }) => (
  <div className="FavouritesList">
    <ul>
      {movies.map(movie => (
        movie.Title
      ))}
    </ul>
    <button>Clear</button>
  </div>
);

FavouritesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavouritesList;
