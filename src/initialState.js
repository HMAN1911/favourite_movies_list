const initialState = {
  favouriteMovies: localStorage.getItem('favouriteMovies') || { favouriteMovies: [] },
  sortBy: 'TitleAsc',
  searchValue: '',
};

export default initialState;
