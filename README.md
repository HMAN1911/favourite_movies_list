# Favourite Movies List

This is a favourite movie list, which fetches data from [omdb API](http://www.omdbapi.com/). It is built using [React](https://github.com/facebook/react) and [React-Refetch](https://github.com/heroku/react-refetch).

## Installation

You will need nodeJS to install this application. You will need a modern browser to use it. If you have yarn installed, you can replace `npm` with `yarn` in the following instructions. But you already knew that ;)

```
git clone https://github.com/HMAN1911/favourite_movies_list
cd favourite_movies_list
npm install
```

## Usage
To start using the app, run:

```
npm start
```

to run through all tests in `/tests`, run:

```
npm test
```

## Development Notes

* The first commit includes the [create-react-app boilerplate](https://github.com/facebookincubator/create-react-app) which was ejected to include sass.
* Input in the search bar is debounced to prevent excessive network requests. [lodash.debounce](https://www.npmjs.com/package/lodash.debounce) was used for this.
* [enzyme](https://github.com/airbnb/enzyme) and [jest](https://github.com/facebook/jest) used for component and unit testing.
* All application state resides within `App.jsx`, using react's built in state management methods.
* `setTimeout` was used to prevent excessively writing to localStorage using React lifecycle methods.
* `browserMocks` is used to mock localStorage for testing.
* [ReactCSSTransitionGroup](https://www.npmjs.com/package/react-addons-css-transition-group) was used to add a subtle reveal animation to the dropdown items.
* Items in the search results additionally display year and IMDB Rating of search query results.

## Considerations and Next Steps

* I considered using `React Router`, however the app as it currently stands lacks a good use case for the library, as there are no true 'views' to route.
* Minimal effort has been made for mobile compatibility, though it works decently on iPhone and android devices.
* If application state becomes more complex, [immutableJS](https://facebook.github.io/immutable-js/) can be introduced.
* Browser backward compatibility could be improved upon, though it was out of scope for this project.


