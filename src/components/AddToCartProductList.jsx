import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/localStorage';

class AddToCartProductList extends Component {
  handleLocalStorage = () => {
    const { product } = this.props;
    storage.saveProductsOnStorage(product);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          name="button-add-to-cart"
          onClick={ this.handleLocalStorage }
        >
          Adicione ao carrinho
        </button>
      </div>

    );
  }
}

AddToCartProductList.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default AddToCartProductList;
