const initialState = {
  favouriteMovies: JSON.parse(localStorage.getItem('favouriteMovies')) || [],
  sortBy: 'TitleAsc',
  searchValue: '',
};

export const setStorage = (favouriteMovies) => {
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
};

export default initialState;
