import { SORT_OPTIONS } from './constants';

const sortMovies = (items, key) => {
  if (!SORT_OPTIONS[key]) {
    throw new Error('Unhandled key received by sortMovies');
  }
  const [sortBy, order] = key.split('_');

  const sorted = items.sort((a, b) => {
    if (a[sortBy] === b[sortBy]) {
      return 0;
    }
    return (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) ? 1 : -1;
  });

  return (order === 'Asc') ? sorted.reverse() : sorted;
};

export default sortMovies;
