import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Checkout extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        { cartList.map((product, index) => (
          <div key={ `${product.id}_${index}` }>
            <h2 data-testid="shopping-cart-product-name">{product.title}</h2>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {`Quantidade: ${product.quant}`}
            </p>
          </div>
        ))}
        <Form />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartList: PropTypes.object,
}.isRequired;

export default Checkout;
