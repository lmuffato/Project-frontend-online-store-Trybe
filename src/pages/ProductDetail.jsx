import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import UserForm from '../components/UserReview';
import ProductInfo from '../components/ProductInfo';

class ProductDetail extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;

    // const { cart, totalPayment } = this.state;

    return (
      <>
        <Header />
        <ProductInfo product={ product } />
        <UserForm />
      </>
    );
  }
}

// ---> passar a informação do produto, sem direcionar para a pg do carrinho

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
