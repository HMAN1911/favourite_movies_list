const initialState = {
  favouriteMovies: JSON.parse(localStorage.getItem('favouriteMovies')) || [],
  sortBy: 'Title_Asc',
  searchValue: '',
};

export const setStorage = (favouriteMovies) => {
  localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
};

export default initialState;
