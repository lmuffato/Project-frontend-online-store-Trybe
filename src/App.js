import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CategoryList from './components/CategoryList';
import Routes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <CategoryList />
    </BrowserRouter>
  );
}

export default App;
