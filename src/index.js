import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'firebase/storage';
import './App.scss';

const store = configureStore();

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
    registerServiceWorker();
});


