import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchJournalReducer } from './reducers/journalReducers';
import {
  loginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

/**
 *  combines different reducers and pass it to the store
 */
const reducer = combineReducers({
  allJournals: fetchJournalReducer,
  userLogin: loginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

/**
 *  all the initial states- when the store is loaded---
 */
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

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
