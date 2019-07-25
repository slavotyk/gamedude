import React from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/nav/navbar';
import Footer from './components/layout/footer/footer';

import SignIn from './components/layout/auth/SignIn';
import SignUp from './components/layout/auth/SignUp';

import Landing from './components/layout/landing/landing';
import SearchResult from './components/layout/search/searchresult';
import GamePage from './components/layout/gamepage/gamepage';
import PostPage from './components/layout/PostPage/PostPage';

import Office from './components/layout/office/office';
import Error from './components/layout/error/404';

import Analytics from 'react-router-ga';

function App() {
  return (
      <BrowserRouter>
        <div className="App">

            <Analytics id="UA-125805128-4">
                <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/search' component={SearchResult} />

                <Route path='/games/:id' component={GamePage} />
                <Route path='/posts/:id' component={PostPage} />

                <Route path='/back-office' component={Office} />

                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />

                <Route component={Error} />
            </Switch>
            </Analytics>
            <Navbar/>
            <Footer/>

        </div>
      </BrowserRouter>
  );
}

export default App;
