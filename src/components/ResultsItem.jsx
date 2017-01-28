import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';

const ResultsItem = ({ movieFetch }) => {

  if (movieFetch.fulfilled) {
    return (
      <li className="ResultsItem">
        <span>{movieFetch.value.Title}</span>
        <button>Add</button>
      </li>
    );
  }
  return (
    <li className="ResultsItem">
      <span>Loading...</span>
      <button disabled>add</button>
    </li>
  );
};

ResultsItem.propTypes = {
  movieFetch: PropTypes.instanceOf(PromiseState).isRequired,
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
