import React from 'react';
import PropTypes from 'prop-types';

class ItemOfCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.altQuantity = this.altQuantity.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd(event) {
    const type = event.target.getAttribute('data-type');
    const { quantity } = this.state;
    const { product } = this.props;
    const stock = product.available_quantity;
    // const { price } = product;

    if (type === 'increase' && quantity < stock) {
      return this.setState({ quantity: quantity + 1 });
    }
    if (type === 'decrease' && quantity > 1) {
      return this.setState({ quantity: quantity - 1 });
    }
  }

  altQuantity(event) {
    const { value } = event.target;
    this.setState({
      quantity: value,
    });
  }

  render() {
    const { product } = this.props;
    const { title, price } = product;
    const { quantity } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <h4>
          { new Intl.NumberFormat('pt-BR', {
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
