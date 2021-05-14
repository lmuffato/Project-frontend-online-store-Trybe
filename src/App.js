import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  render() {
    api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos');
    return (
      <div className="App">
        
    </div>
  );
}
}

export default App;
