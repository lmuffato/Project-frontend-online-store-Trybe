import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InputSearch from './components/InputSearch'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch> 
            <Route exact path="/" component={InputSearch} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
