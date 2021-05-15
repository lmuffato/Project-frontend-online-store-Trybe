import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
