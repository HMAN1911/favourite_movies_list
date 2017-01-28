import sortMovies from '../utils';

describe('sortMovies utility', () => {
  const sampleItems = [
    { Title: 'test', Year: 2017, imdbRating: 9 },
    { Title: 'Best', Year: 2016, imdbRating: 8 },
    { Title: 'vest', Year: 2015, imdbRating: 7 },
    { Title: 'zest', Year: 2014, imdbRating: 'N/A' },
  ];

  it('should throw an error if unrecognised key provided', () => {
    const expectedError = 'Unhandled key received by sortMovies';
    expect(() => sortMovies(sampleItems, 'BANANA')).toThrowError(expectedError);
  });

  it('should correctly return descending order by title', () => {
    const expectedResult = [
      { Title: 'zest', Year: 2014, imdbRating: 'N/A' },
      { Title: 'vest', Year: 2015, imdbRating: 7 },
      { Title: 'test', Year: 2017, imdbRating: 9 },
      { Title: 'Best', Year: 2016, imdbRating: 8 },
    ];
    expect(sortMovies(sampleItems, 'Title_Desc')).toEqual(expectedResult);
  });

  it('should correctly return ascending order by title', () => {
    const expectedResult = [
      { Title: 'Best', Year: 2016, imdbRating: 8 },
      { Title: 'test', Year: 2017, imdbRating: 9 },
      { Title: 'vest', Year: 2015, imdbRating: 7 },
      { Title: 'zest', Year: 2014, imdbRating: 'N/A' },
    ];
    expect(sortMovies(sampleItems, 'Title_Asc')).toEqual(expectedResult);
  });

  it('should correctly return ascending order by year', () => {
    const expectedResult = [
      { Title: 'zest', Year: 2014, imdbRating: 'N/A' },
      { Title: 'vest', Year: 2015, imdbRating: 7 },
      { Title: 'Best', Year: 2016, imdbRating: 8 },
      { Title: 'test', Year: 2017, imdbRating: 9 },
    ];
    expect(sortMovies(sampleItems, 'Year_Asc')).toEqual(expectedResult);
  });

  it('should place N/A correctly at the end when sorting by rating ascending', () => {
    const expectedResult = [
      { Title: 'vest', Year: 2015, imdbRating: 7 },
      { Title: 'Best', Year: 2016, imdbRating: 8 },
      { Title: 'test', Year: 2017, imdbRating: 9 },
      { Title: 'zest', Year: 2014, imdbRating: 'N/A' },
    ];
    expect(sortMovies(sampleItems, 'imdbRating_Asc')).toEqual(expectedResult);
  });

  it('should place N/A correctly at the bottom when sorting by rating Descending', () => {
    const expectedResult = [
      { Title: 'test', Year: 2017, imdbRating: 9 },
      { Title: 'Best', Year: 2016, imdbRating: 8 },
      { Title: 'vest', Year: 2015, imdbRating: 7 },
      { Title: 'zest', Year: 2014, imdbRating: 'N/A' },
    ];
    expect(sortMovies(sampleItems, 'imdbRating_Desc')).toEqual(expectedResult);
  });
});
