const initialState = {
  favouriteMovies: localStorage.getItem('favouriteMovies') || [],
  sortBy: 'TitleAsc',
  searchValue: '',
};

export const setStorage = (favouriteMovies) => {
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
  return true;
};

export default initialState;
