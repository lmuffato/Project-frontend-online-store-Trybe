import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

async function App() {
  const data = await getCategories();
  console.log(data);
  // getProductsFromCategoryAndQuery(data.id, data.name);
  return (
    <div className="App">
      {/* <h1>{}</h1> */}
    </div>
  );
}

export default App;
