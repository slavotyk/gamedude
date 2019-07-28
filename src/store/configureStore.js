import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
    reduxFirestore(fbConfig) // redux bindings for firestore
)(createStore);


export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
