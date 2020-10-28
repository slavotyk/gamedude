import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import './App.scss';

import Navbar from './components/layout/nav/navbar';
import Footer from './components/layout/footer/footer';

import SignIn from './components/layout/auth/SignIn';
import SignUp from './components/layout/auth/SignUp';

import Landing from './components/layout/landing/landing';
import SearchResult from './components/layout/search/searchresult';
import GamePage from './components/layout/gamepage/gamepage';
import PostPage from './components/layout/PostPage/PostPage';

import Office from './components/layout/office/office';
import GameModeration from "./components/layout/office/GameModeration/GameModeration";
import PostModeration from "./components/layout/office/PostModeration/PostModeration";
import GameEditor from "./components/layout/office/GameModeration/GameEditor/GameEditor";
import GameCreation from "./components/layout/office/createGame/CreateGame";
import PostEditor from "./components/layout/office/PostModeration/PostEditor/PostEditor";
import PostCreation from "./components/layout/office/PostCreation/PostCreation";

import UserPage from "./components/layout/user/userpage";

import Error from './components/layout/error/404';
import ScrollToTop from "./components/scrollToTop";

import {loadReCaptcha} from 'react-recaptcha-google';


const App = () => {

    useEffect(() => {
        loadReCaptcha();
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>GameDude сервис поиска информации про игры</title>
            </Helmet>
            <BrowserRouter>
                <div className="App">
                    <ScrollToTop/>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/search' component={SearchResult}/>

                        <Route path='/games/:id' component={GamePage}/>
                        <Route path='/posts/:id' component={PostPage}/>

                        <Route path='/users/:id' component={UserPage}/>

                        <Route path='/back-office/games/:id' component={GameEditor}/>
                        <Route path='/back-office/posts/:id' component={PostEditor}/>

                        <Route path='/back-office/gameCreation' component={GameCreation}/>
                        <Route path='/back-office/gamesModeration' component={GameModeration}/>
                        <Route path='/back-office/postsModeration' component={PostModeration}/>
                        <Route path='/back-office/postCreation' component={PostCreation}/>
                        <Route path='/back-office' component={Office}/>

                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>

                        <Route component={Error}/>
                    </Switch>
                    <Navbar/>
                    <Footer/>

                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
