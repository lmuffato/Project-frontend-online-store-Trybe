import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveProductsOnStorage } from '../services/localStorage';

export default class AddButton extends Component {
  handleClick = () => {
    const { data } = this.props;
    saveProductsOnStorage(data);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick() }
        >
          Adicione ao carrinho
        </button>
      </div>
    );
  }
}

AddButton.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};
