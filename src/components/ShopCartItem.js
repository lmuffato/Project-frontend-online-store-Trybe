import React from 'react';
import PropTypes from 'prop-types';

class ShopCartItem extends React.Component {
  render() {
    const { product, quantity } = this.props;
    
    const { title, thumbnail, price } = product;
    return (
      <li>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img
          src={ thumbnail }
          alt={ `imagem do produto ${title}` }
        />
        <p>{`R$${parseFloat(price).toFixed(2)}`}</p>
        <p data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${quantity}`}
        </p>
      </li>
    );
  }
}

ShopCartItem.propTypes = {
  product: PropTypes.arrayOf.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShopCartItem;
