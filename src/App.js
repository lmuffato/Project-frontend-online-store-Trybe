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
          <Route path="/CartShopPage" component={ CartShopPage } />
          <Route
            path="/detailsPage/:id"
            render={ (props) => <DetailsPage { ...props } /> }
          />
        </Switch>
        <Search />
        <CartButton />
        <CategorieList />
      </BrowserRouter>
    </div>

  );
}

export default App;
