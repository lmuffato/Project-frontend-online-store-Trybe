import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const newCartItemId = [];
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <img src={ product.image } alt={ `Foto do produto ${product.title}` } />
        <h3>{ `R$: ${parseFloat(product.price).toFixed(2)}` }</h3>
        <Link
          to={ { pathname: '/ShoppingCartPage',
            state: { product, newCartItemId } } }
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
