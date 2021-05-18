import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemOfCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.altQuantity = this.altQuantity.bind(this);
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
        <h4>{price}</h4>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <input min="1" defaultValue="1" type="number" onChange={ this.altQuantity } />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
      </div>
    );
  }
}

ItemOfCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ItemOfCart;
