import React from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/nav/navbar';
import Footer from './components/layout/footer/footer';

import Landing from './components/layout/landing/landing';
import SearchResult from './components/layout/search/searchresult';
import GamePage from './components/layout/gamepage/gamepage';
import Error from './components/layout/error/404';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>

            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/search' component={SearchResult} />
                <Route path='/game' component={GamePage} />
                <Route component={Error} />
            </Switch>

            <Footer/>

        </div>
      </BrowserRouter>
  );
}

export default App;
