import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Splash from "./splash/splash";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path = "/" component = {Splash} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
