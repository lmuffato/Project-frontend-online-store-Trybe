import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import ShoppingCartPage from './pages/ShoppingCartPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <Route exact path="/ShoppingCartPage" component={ ShoppingCartPage } />
      </BrowserRouter>
    );
  }
}

export default App;
