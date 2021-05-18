// Criação do componente
import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
  render() {
    const { cartInfo } = this.props;
    console.log(cartInfo);
    if (cartInfo.title.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{cartInfo.title}</p>
        <img src={ cartInfo.thumbnail } alt={ cartInfo.thumbnailId } width="100px" />
        <p>
          R$
          {cartInfo.price}
        </p>
        <p data-testid="shopping-cart-product-quantity">Quantidade: </p>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    thumbnail_id: PropTypes,
    price: PropTypes.number,
  }),
}.isRequired;
