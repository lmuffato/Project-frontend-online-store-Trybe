import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ Landing } />
      </Switch>
    </Router>
  );
}

export default App;
