import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/product_list';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ ProductList } />
      </Router>
    </div>
  );
}

export default App;
