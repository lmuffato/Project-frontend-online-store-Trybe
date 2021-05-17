import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import ProductsByCategory from './pages/ProductsByCategory';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route path="/carrinho-de-compras" component={ CarrinhoDeCompras } />
        <Route path="/products-by-category/:id" component={ ProductsByCategory } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
