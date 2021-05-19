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

  handleOnclick = (operation) => {
    const { quantity } = this.state;
    if (operation === 'add') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), () => this.updateTotalPrice());
    } else if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => this.updateTotalPrice());
    }
  }

  updateTotalPrice = () => {
    const { product: { price } } = this.props;
    const { quantity } = this.state;
    this.setState({
      totalPrice: price * quantity,
    });
  }

  render() {
    const { product, onChange } = this.props;
    const { title, price, thumbnail } = product;
    const { quantity, totalPrice } = this.state;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          onClick={ () => this.handleOnclick('sub') }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        {/* <input onChange={ () => onChange(totalPrice) } value={ totalPrice } /> */}
        <button
          onClick={ () => this.handleOnclick('add') }
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
