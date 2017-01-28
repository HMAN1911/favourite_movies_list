const initialState = {
  favouriteMovies: localStorage.getItem('favouriteMovies') || [],
  sortBy: 'TitleAsc',
  searchValue: '',
};

export default initialState;
