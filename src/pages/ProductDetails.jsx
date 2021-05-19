import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: product }, callBack } = this.props;

    // Use o log abaixo para verificar todas as informações que temos sobre o produto
    // console.log(Object.entries(product));
    const { title, price, thumbnail } = product;
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
            {`${title} - R$ ${price}`}
          </h2>
          <img src={ thumbnail } alt={ `Produto ${title}` } />
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

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
};
export default ProductDetails;
