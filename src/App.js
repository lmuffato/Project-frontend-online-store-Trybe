import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/product_list';
import ShoppingCart from './components/ShoppingCart';
import ShopCartButton from './components/ShopCartButton';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
