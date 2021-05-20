import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartShopPage from './Components/CartShopPage';
import Search from './Components/Search';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={ Search } />
          <Route
            exact
            path="/detailsPage/:id"
            render={ (props) => <DetailsPage { ...props } /> }
          />
          <Route
            path="/CartShopPage"
            render={ (props) => (<CartShopPage
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
