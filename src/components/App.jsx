import React, { Component } from 'react';
import MovieSearch from './MovieSearch';
import initialState from '../initialState';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentWillMount() {
    // turn the string in localStorage to a JS Object
    // App never unmounts, so this will only happen once.
    if (typeof this.state.favouriteMovies === 'string') {
      this.setState({ favouriteMovies: JSON.parse(this.state.favouriteMovies) });
    }
  }

  render() {
    return (
      <div className="App">
        <MovieSearch />
      </div>
    );
  }
}

export default App;
