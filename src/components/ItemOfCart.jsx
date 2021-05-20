import React from 'react';
import PropTypes from 'prop-types';
import * as shoppingCartService from '../services/shoppingCartService';

class ItemOfCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      altQuantity: false,
      altPrice: props.product.price,
    };
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd(event) {
    const type = event.target.getAttribute('data-type');
    const { quantity, altPrice } = this.state;
    const { product } = this.props;
    const { price } = product;
    const stock = product.available_quantity;

    if (type === 'increase' && quantity < stock) {
      return this.setState({
        quantity: quantity + 1,
        altQuantity: true,
        altPrice: (quantity + 1) * price,
      }, shoppingCartService.getQuantity(1));
    }
    if (type === 'decrease' && quantity > 1) {
      return this.setState({
        quantity: quantity - 1,
        altQuantity: true,
        altPrice: altPrice - price,
      }, shoppingCartService.subtractQuantity(1));
    }
  }

  render() {
    const { product } = this.props;
    const { title, price } = product;
    const { quantity, altQuantity, altPrice } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <h4>
          { altQuantity ? new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(altPrice)) : new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price) }
        </h4>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          type="button"
          data-type="increase"
          data-testid="product-increase-quantity"
          onClick={ this.onClickAdd }
        >
          Aumentar
        </button>
        <button
          type="button"
          data-type="decrease"
          data-testid="product-decrease-quantity"
          onClick={ this.onClickAdd }
        >
          Diminuir
        </button>
      </div>
    );
  }
}

ItemOfCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
};

export default ItemOfCart;
