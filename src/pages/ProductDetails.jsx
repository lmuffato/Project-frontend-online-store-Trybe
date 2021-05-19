import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailedProductCard from '../components/DetailedProductCard/DetailedProductCard';
import EvaluationForms from '../components/EvaluationForms/EvaluationForms';
import Evaluations from '../components/Evaluations/Evaluations';

class ProductDetails extends Component {
  productCard(title, price, thumbnail) {
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

  render() {
    const { location: { state: product } } = this.props;
    return (
      <>
        <DetailedProductCard { ...product } />
        <EvaluationForms id={ product.id } />
        <Evaluations id={ product.id } />
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      // A componente DetailedProductCard é responsável por validar as props que ela precisa
    }),
  }).isRequired,
};

export default ProductDetails;
