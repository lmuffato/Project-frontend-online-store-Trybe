import React from 'react';
import { Redirect } from 'react-router';

function Click(){
    return(
        <Redirect to="/" />
    );
}

function CarrinhoDeCompras() {
  return( 
    <div>
        <h1>Página Carrinho de Compras</h1>
        <button onClick={Click}>Voltar</button>
        <span>Carrinho de Compras</span>
    </div>
  )
}

export default CarrinhoDeCompras;
