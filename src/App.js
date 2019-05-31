import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/layout/landing';
import Navbar from './components/layout/nav/navbar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>

            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>


        </div>
      </BrowserRouter>
  );
}

export default App;
