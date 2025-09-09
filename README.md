# Namaste React 🚀

## [Parcel](https://parceljs.org)

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm - written in c++
- Caching - faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code splitting
- Differential bundling - supports old browsers
- Diagnostic
- Error handling
- HTTPs
- Tree shaking - removing unwanted code
- Different dev and prod builds

## [BrowsersList](https://browserslist.dev)

- Targeting browsers

---

# ep-4/code

## Namaste Eats

Components:

- [x] Header
  - [x] Logo
  - [x] Nav Items
- [x] Body
  - [ ] Search Bar
  - [x] Restaurant List
    - [x] Restaurant Card
      - [x] Image
      - [x] Name
      - [x] Rating
      - [x] Cusines
- [ ] Footer
  - Copyrights
  - Links
  - Address
  - Contact

---

# React Hooks

(Normal JS utility functions)

- 2 most important hooks
  - useState
  - useEffect
-
- useState
  // When ever a state variable changes, react will re-render the componentx

# 2 types of Routing

- Client Side Routing (everything is loaded on first load only, if you change routes only components change, no network calls) (also known as Single page applications [SPA])
- Server Side Routing (whole page is refreshed and network calls are made)

# Class components

- [Lifecycle methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - constructor
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount
  - render

## To imporve performance of app

// Chunking
// Code spliting
// Dynamic Bundling
// Lazy loading
// Dynamic import
// On demand loading
// Image optimization

## Types of pagination

- Offset pagination
- Cursor based pagination

## Redux

- [x] pnpm run @reduxjs/toolkit react-redux
- [x] build our store
- [x] connect our store to our app
- [x] create a cart slice
- [x] dispatch an action
- [x] selector

## Types of testing - (developer)

- Unit testing
- Integration testing
- End to end testing

# Setting up testing in our app

- install testing library react
- install jest
- install babel and jest dependencies for testing
- add babel cofig
- configure parcel config file to disable default babel transpilation
