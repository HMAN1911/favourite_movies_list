import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ResultsItem from './ResultsItem';
import FetchError from './FetchError';
import '../styles/ResultsList.scss';

const ResultsList = ({ moviesFetch, addToFavourites, isInFavourites }) => {
  if (moviesFetch.rejected) {
    return <FetchError reason={moviesFetch.reason} />;
  }

  if (moviesFetch.fulfilled && !moviesFetch.value.Search) {
    return <h3>Your princess is in another castle... Try another search.</h3>;
  }

  if (moviesFetch.fulfilled && moviesFetch.value.Search) {
    const movies = moviesFetch.value.Search.map(movie => movie);
    return (
      <div className="ResultsList">
        <ul>
          <ReactCSSTransitionGroup
            transitionName="reveal"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnter
            transitionLeave
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {movies.map(movie => (
              <ResultsItem
                key={movie.imdbID}
                movie={movie}
                isInFavourites={isInFavourites}
                addToFavourites={addToFavourites}
              />
            ))}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
  return null;
};

ResultsList.propTypes = {
  moviesFetch: PropTypes.instanceOf(PromiseState).isRequired,
  addToFavourites: PropTypes.func.isRequired,
  isInFavourites: PropTypes.func.isRequired,
};

export { ResultsList as ResultsListUnconnected };
export default connect(props => ({
  moviesFetch: {
    url: `https://www.omdbapi.com/?type=movie&s=${props.searchQuery}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  },
}))(ResultsList);
