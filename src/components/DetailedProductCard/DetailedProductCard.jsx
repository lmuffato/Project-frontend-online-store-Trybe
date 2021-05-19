import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailedProductCard extends Component {
  render() {
    // Use o log abaixo para verificar todas as informações que podemos usar sobre o produto
    // console.log(Object.entries(this.props));
    const { product, callBack } = this.props;
    return (
      <>
        <Link
          to="/cartContent"
          data-testid="shopping-cart-button"
        >
          <img
            style={ { width: '40px' } }
            src="/images/shoppingCart.png"
            alt="Carrinho de compras"
          />
        </Link>
        <section>
          <h2 data-testid="product-detail-name">
            {`${product.title} - R$ ${product.price}`}
          </h2>
          <img src={ product.thumbnail } alt={ `Produto ${product.title}` } />
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => callBack(product) }
          >
            Adicionar ao carrinho
          </button>
        </section>
      </>
    );
  }
}

DetailedProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
export default DetailedProductCard;
