import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  render() {
    const { cart } = this.state;
    const cartIsEmpty = cart.length < 1;
    return (
      <>
        <h1>Carrinho de Compras</h1>
        { cartIsEmpty ? (
          <strong data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </strong>
        ) : (
          <>
            {cart.map((product) => (
              <h1 key={ product.id }>{ product.title }</h1>
            ))}
            <strong>Valor total da compra</strong>
            <button type="button">Finalizar compra</button>
          </>
        )}
      </>
    );
  }
}

export default ShoppingCart;
