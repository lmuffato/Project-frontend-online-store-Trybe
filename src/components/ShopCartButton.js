import React from 'react';
import ShopCart from './ShopCart';

class ShopCartButton extends React.Component {
  render() {
    return (
      <button type="button" id="button" onClick={ ShopCart }>
        Carrinho
      </button>
    );
  }
}

export default ShopCartButton;
