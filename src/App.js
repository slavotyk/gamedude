import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

import { Provider } from 'react-redux';
import Routes from './routes';

import './App.scss';

import Navbar from './components/layout/nav/navbar';
import Footer from './components/layout/footer/footer';

import ScrollToTop from "./components/scrollToTop";

import {loadReCaptcha} from 'react-recaptcha-google';

import store from './store/store';

const App = () => {

    useEffect(() => {
        loadReCaptcha();
    }, [])

    return (
        <>

            <Provider store={store}>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>GameDude сервис поиска информации про игры</title>
                </Helmet>
                <div className="App">
                    <ScrollToTop/>
                    <Routes/>
                    <Navbar/>
                    <Footer/>

                </div>
            </Provider>
        </>
    );
}

export default App;
