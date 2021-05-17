import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Route path="/cart" component={ Cart } />
      <Route exact path="/" component={ Landing } />
    </Router>
  );
}

export default App;
