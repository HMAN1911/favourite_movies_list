import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';
import FetchError from './FetchError';
import '../styles/ResultsItem.scss';

const ResultsItem = ({ movieFetch, addToFavourites, isInFavourites }) => {
  if (movieFetch.rejected) {
    return <FetchError reason={movieFetch.reason} />;
  }
  if (movieFetch.fulfilled) {
    const isDisabled = isInFavourites(movieFetch.value.imdbID);
    return (
      <li className="ResultsItem">
        <div className="ResultsItem__TextContent">
          <span className="ResultsItem__Title">{movieFetch.value.Title}</span>
          <span className="ResultsItem__Year">({movieFetch.value.Year})</span>
          <div className="ResultsItem__imdbRating">IMDB: {movieFetch.value.imdbRating}</div>
        </div>
        <button disabled={isDisabled} onClick={() => addToFavourites(movieFetch.value)}>Add</button>
      </li>
    );
  }
  return (
    <li className="ResultsItem">
      <div className="ResultsItem__TextContent">
        <span className="ResultsItem--Loading">Loading...</span>
      </div>
      <button disabled>add</button>
    </li>
  );
};

ResultsItem.propTypes = {
  movieFetch: PropTypes.instanceOf(PromiseState).isRequired,
  addToFavourites: PropTypes.func.isRequired,
  isInFavourites: PropTypes.func.isRequired,
};

export { ResultsItem as ResultsItemUnconnected };
export default connect(props => ({
  movieFetch: {
    url: `http://www.omdbapi.com/?type=movie&i=${props.movie.imdbID}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  },
}))(ResultsItem);
