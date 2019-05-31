import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/layout/landing';
import Navbar from './components/layout/nav/navbar';
import Footer from './components/layout/footer/footer';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>

            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>

            <Footer/>

        </div>
      </BrowserRouter>
  );
}

export default App;
