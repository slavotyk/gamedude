import authReducer from './authReducer'
import gameReducer from './gameReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import searchReducer from './searchReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  search: searchReducer,
  post: postReducer
});

export default rootReducer

// the key name will be the data property on the state object
