import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    const { quantity } = product;
    this.state = {
      quantity,
    };
  }

  addClick = () => {
    const { quantity } = this.state;
    const { product } = this.props;
    const { availableQuantity } = product;
    console.log(availableQuantity);

    if (quantity < availableQuantity) {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    }
  }

  subClick = () => {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  }

  sumtotal = (price) => {
    const { quantity } = this.state;
    if (quantity === 0) {
      return quantity;
    }
    return `R$: ${price * quantity}`;
  }

  render() {
    const { quantity } = this.state;
    const { product } = this.props;
    const { price } = product;
    return (
      <section>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.subClick }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.addClick }
        >
          +
        </button>
        <span>{this.sumtotal(price)}</span>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    availableQuantity: PropTypes.number,
  }).isRequired,
};

export default ShoppingCart;
