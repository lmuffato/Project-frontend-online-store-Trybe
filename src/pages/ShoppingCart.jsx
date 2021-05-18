import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  render() {
    const { cartItems } = this.state;
    if (cartItems.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        {cartItems.map((item) => (
          <span key={ item.id }>{item.title}</span>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
