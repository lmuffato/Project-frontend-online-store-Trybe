// Falta implementar o requisito 9 para que este seja atualizado e setado para que funcione direito
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { products: { value } } = this.props;

    this.state = {
      valueProduct: value,
      quantity: 1,
    };
  }

  addPrice = () => {
    const { products: { value } } = this.props;
    this.setState(({ quantity }) => ({ quantity: quantity + 1 }));
    this.setState(({ quantity }) => ({ valueProduct: quantity * value }));
  }

  decreasePrice = () => {
    const { quantity } = this.state;
    const { products: { value } } = this.props;
    if (quantity > 1) { this.setState(({ quantity }) => ({ quantity: quantity - 1 })); }
    this.setState(({ quantity }) => ({ valueProduct: quantity * value }));
  }

  render() {
    const { products: { name, imgPath, id } } = this.props;
    const { deleteItem } = this.props;
    const { valueProduct } = this.state;
    return (
      <div>
        <button type="button" onClick={ deleteItem } id={ id }>
          X
        </button>
        <h2>
          { name }
        </h2>
        <image src={ imgPath } alt="Imagem Produto" />
        <h3>
          { `R$ ${valueProduct}` }
        </h3>
        <div>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.addPrice }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decreate-quantity"
            onClick={ this.decreasePrice }
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

CartProduct.propTypes = {
  products: PropTypes.object,
}.isRequired;
