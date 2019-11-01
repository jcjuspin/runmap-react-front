// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
import inscriptionMiddleware from './inscriptionMiddleware';
import searchMiddleware from './searchMiddleware';
import addPlaceMiddleware from './addPlaceMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    inscriptionMiddleware,
    searchMiddleware,
    addPlaceMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
