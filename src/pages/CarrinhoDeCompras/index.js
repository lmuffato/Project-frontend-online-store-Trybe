import React from 'react';
import { Link } from 'react-router-dom';

function CarrinhoDeCompras() {
  return (
    <div>
      <h1>Página Carrinho de Compras</h1>
      <Link data-testid="shopping-cart-button" type="button" to="/">Voltar</Link>
      <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
    </div>
  );
}

export default CarrinhoDeCompras;
