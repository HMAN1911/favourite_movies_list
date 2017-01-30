import React, { Component, PropTypes } from 'react';
import FavouritesItem from './FavouritesItem';
import sortMovies from '../utils';
import '../styles/FavouritesList.scss';

class FavouritesList extends Component {
  constructor() {
    super();
    this.state = { confirm: false };
    this.toggleConfirm = this.toggleConfirm.bind(this);
  }

  toggleConfirm() {
    this.setState({ confirm: !this.state.confirm });
  }

  render() {
    const { movies, removeFavourites, clearFavourites, sortBy } = this.props;
    const sorted = sortMovies(movies, sortBy);
    return (
      <div className="FavouritesList">
        <ul>
          {
            sorted.map(movie => (
              <FavouritesItem
                key={movie.imdbID}
                removeFavourites={removeFavourites}
                movie={movie}
              />
            ))
          }
        </ul>
        <div className="FavouritesList__Interface">
          <button onClick={this.toggleConfirm}>
            {this.state.confirm ? 'cancel' : 'clear'}
          </button>
          <button
            onClick={() => {
              clearFavourites();
              this.toggleConfirm();
            }}
            className={this.state.confirm ? 'FavouritesList--confirm' : 'FavouritesList--hide'}
          >Confirm</button>
        </div>
      </div>
    );
  }
}

FavouritesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFavourites: PropTypes.func.isRequired,
  clearFavourites: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default FavouritesList;
