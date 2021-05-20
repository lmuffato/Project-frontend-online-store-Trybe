import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import ProductsByCategory from './pages/ProductsByCategory';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Main } />
            <Route path="/carrinho-de-compras" component={ CarrinhoDeCompras } />
            <Route path="/products-by-category/:id" component={ ProductsByCategory } />
            <Route
              path="/details/products/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
