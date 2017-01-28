import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';
import ResultsItem from './ResultsItem';

const ResultsList = ({ moviesFetch }) => {
  if (moviesFetch.fulfilled && moviesFetch.value.Search) {
    const movies = moviesFetch.value.Search.map(movie => movie);
    return (
      <div className="ResultsList">
        <ul>
          {movies.map(movie => (
            <ResultsItem
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

ResultsList.propTypes = {
  moviesFetch: PropTypes.instanceOf(PromiseState).isRequired,
};

export { ResultsList as ResultsListUnconnected };
export default connect(props => ({
  moviesFetch: {
    url: `http://www.omdbapi.com/?type=movie&s=${props.searchQuery}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  },
}))(ResultsList);
