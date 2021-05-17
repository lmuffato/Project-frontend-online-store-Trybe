import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route path="/carrinho-de-compras" component={ CarrinhoDeCompras } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
