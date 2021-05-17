import React from 'react';
import ShopCart from './ShopCart';

class ShopCartButton extends React.Component {
  render() {
    return (
      <button type="button" id="button" onClick={ ShopCart }>
        Teste
      </button>
    );
  }
}

export default ShopCartButton;
