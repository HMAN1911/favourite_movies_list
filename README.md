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

Try it online [here](https://hman1911.github.io/favourite_movies_list/), or run it locally.

To start using the app, run:

```
npm start
```

to run through all tests in `/tests`, run:

```
npm test
```

## Development Notes

* The [first commit](https://github.com/HMAN1911/favourite_movies_list/commit/22f4a919d167b307dfb7220cd5758d232b91b48a) includes the [create-react-app boilerplate](https://github.com/facebookincubator/create-react-app) which was ejected to include Sass.
* [eslint airbnb](https://github.com/airbnb/javascript) was used to provide linting for the project.
* OOCSS and BEM principles were followed for styling in Sass.
* Input in the search bar is debounced to prevent excessive network requests. [lodash.debounce](https://www.npmjs.com/package/lodash.debounce) was used for this.
* [enzyme](https://github.com/airbnb/enzyme) and [jest](https://github.com/facebook/jest) used for component and unit testing.
* All application state resides within `App.jsx`, using react's built in state management methods.
* `setTimeout` was used to prevent excessively writing to localStorage using React lifecycle methods.
* `config/browserMocks` is used to mock localStorage for testing.
* [ReactCSSTransitionGroup](https://www.npmjs.com/package/react-addons-css-transition-group) was used to add a subtle reveal animation to the dropdown items.
* Items in the search results additionally display year and IMDB Rating of search query results. This also fetches all individual movie results, so they can be presented in the autocomplete results box.
* iPhone6 media queries have been added for a better responsive experience. Finer control over mobile vs browser experience can be added using [enquirejs](https://github.com/WickyNilliams/enquire.js), or the like.

## Considerations and Next Steps

* I considered using `React Router`, however the app as it currently stands lacks a good use case for the library, as there are no true 'views' to route.
* If application state becomes more complex, [immutableJS](https://facebook.github.io/immutable-js/) can be introduced to prevent mutations in state objects.
* I avoided using `{...this.props}` to pass props along to children, as it makes the structure harder to reason about. Passing props down explicitly is more verbose but allows for finer control and readability.
* Browser backward compatibility could be improved upon, though it was out of scope for this project.
* I chose to keep the clear confirm button state within its own component, as it does not impact any other part of the app.

