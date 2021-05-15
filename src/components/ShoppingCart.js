import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { products, quantity } = this.props;
    this.state = {
      empty: true,
      products,
      quantity,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }
  

  conditional = () => {
    const { empty } = this.state;
    if (empty) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
  }

  render() {
    return (
      <div>
        {this.conditional()}
      </div>
    );
  }
}

export default ShoppingCart;
