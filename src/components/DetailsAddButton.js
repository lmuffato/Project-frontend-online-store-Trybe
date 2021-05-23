import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveProductsOnStorage } from '../services/localStorage';

export default class DetailsAddButton extends Component {
  handleClick = () => {
    const { data } = this.props;
    saveProductsOnStorage(data);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleClick() }
        >
          Adicione ao carrinho
        </button>
      </div>
    );
  }
}

DetailsAddButton.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};
