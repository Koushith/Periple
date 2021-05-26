import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 *  combines different reducers and pass it to the store
 */
const reducer = combineReducers({});

/**
 *  all the initial states- when the store is loaded---
 */

const initialState = {};

/**
 *  middleware- for now we have only thunk
 */

const middleware = [thunk];

/**
 *  create a store from above variables
 */
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
