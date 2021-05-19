import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { product: { price } } = this.props;
    this.state = {
      quantity: 1,
      totalPrice: price,
    };
  }

  handleOnclick = (operation, id) => {
    const { quantity } = this.state;
    if (operation === 'add') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), () => this.updateTotalPrice(id));
    } else if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => this.updateTotalPrice(id));
    }
  }

  updateTotalPrice = (id) => {
    const { onChange } = this.props;
    const { product: { price } } = this.props;
    const { quantity } = this.state;
    this.setState({
      totalPrice: price * quantity,
    }, () => {
      const { totalPrice } = this.state;
      onChange(id, totalPrice);
    });
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    const { quantity } = this.state;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          onClick={ () => this.handleOnclick('sub', id) }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          onClick={ () => this.handleOnclick('add', id) }
          data-testid="product-increase-quantity"
          type="button"
        >
          +
        </button>
        <p>{ price }</p>
      </div>

    );
  }
}

CartItem.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default CartItem;
