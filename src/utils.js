import { SORT_OPTIONS } from './constants';

const sortMovies = (items, key) => {
  if (!SORT_OPTIONS[key]) {
    throw new Error('Unhandled key received by sortMovies');
  }
  const [sortBy, order] = key.split('_');

  const sorted = items.sort((a, b) => {
    const itemA = a[sortBy];
    const itemB = b[sortBy];

    if (itemA === 'N/A') {
      return -1;
    }
    if (itemA === itemB) {
      return 0;
    }
    if (typeof itemA === 'number' && typeof itemB === 'number') {
      return (itemA < itemB) ? 1 : -1;
    }
    if (typeof itemA === 'string' && typeof itemB === 'string') {
      return (itemA.toUpperCase() < itemB.toUpperCase()) ? 1 : -1;
    }
    return 0;
  });

  return (order === 'Asc') ? sorted.reverse() : sorted;
};

export default sortMovies;
