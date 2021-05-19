import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/localStorage';

class AddToCartProductDetails extends Component {
  handleLocalStorage = () => {
    const { product } = this.props;
    storage.saveProductsOnStorage(product);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          name="button-add-to-cart"
          onClick={ this.handleLocalStorage }
        >
          Adicione ao carrinho
        </button>
      </div>

    );
  }
}

AddToCartProductDetails.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default AddToCartProductDetails;
