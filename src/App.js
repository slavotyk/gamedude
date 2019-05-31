import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/layout/landing';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
