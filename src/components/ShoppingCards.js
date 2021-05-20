import React from 'react';

class ShoppingCards extends React.Component {
  render() {
    const { title, price, imagePath, id } = this.props;
    return (
      <div id={ id }>
        <h2 data-testid="shopping-cart-product-name" >{title}</h2>
        <img
          src={ imagePath }
          width="250"
          alt="Imagem do produto"
        />
        <span>{price}</span>
        <br />
        <span data-testid="shopping-cart-product-quantity">1</span>
      </div>
    );
  }
}

export default ShoppingCards;
