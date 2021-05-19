import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartButton from './Components/CartButton';
import CartShopPage from './Components/CartShopPage';
import Search from './Components/Search';
import CategorieList from './Components/CategorieList';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route path="/" exact component={ Search } />
          <Route
            path="/detailsPage/:id"
            render={ (props) => <DetailsPage { ...props } /> }
          />
          <Route path="/CartShopPage" component={ CartShopPage } />
        </Switch>

        <CartButton />
        <CategorieList />
      </BrowserRouter>
    </div>

  );
}

export default App;
