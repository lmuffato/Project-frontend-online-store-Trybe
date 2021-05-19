import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailedProductCard from '../components/DetailedProductCard/DetailedProductCard';
import EvaluationForms from '../components/EvaluationForms/EvaluationForms';
import Evaluations from '../components/Evaluations/Evaluations';

class ProductDetails extends Component {
  render() {
    const { location: { state: product }, callBack } = this.props;
    return (
      <>
        <DetailedProductCard callBack={ callBack } product={ product } />
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
  }),
  callBack: PropTypes.func,
}.isRequired;

export default ProductDetails;
