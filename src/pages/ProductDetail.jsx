import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../components/UserReview';
import ProductInfo from '../components/ProductInfo';

class ProductDetail extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;

    return (
      <>
        <ProductInfo product={ product } />
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
