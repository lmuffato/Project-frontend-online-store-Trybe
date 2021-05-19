import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route
          exact
          path="/details/:id/:category"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route exact path="/" component={ Landing } />
      </Switch>
    </Router>
  );
}

export default App;
