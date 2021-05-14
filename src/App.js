import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories().then(categories => { console.log(categories) });
  api.getProductsFromCategoryAndQuery('MLB5672', 'roda').then(categories => { console.log(categories) });
  return (
    <div className="App">
      <h1>oi</h1>
    </div>
  );
}

export default App;
