import React from 'react';
import './App.css';
import * as api from './services/api'

function App() {
  console.log(api.getCategories());
  return (
    <div>
    </div>
  );
}

export default App;
