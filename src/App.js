import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Home } />
        {/* Adição do componente nas routes */}
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route
          path="/:id"
          render={
            (props) => <ProductDetail { ...props } />
          }
        />
      </Router>
    </div>
  );
}

export default App;
