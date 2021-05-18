import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserForm from '../components/UserReview';
import ProductInfo from '../components/ProductInfo';

class ProductDetail extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;

    return (
      <>
        <ProductInfo product={ product } />
        <Link
          to={ {
            pathname: '/shopping-cart', state: { product },
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </Link>
        <UserForm />
        {/* // <AddToCart /> */}
      </>
    );
  }
}

ProductDetail.propTypes = {
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

export default ProductDetail;
