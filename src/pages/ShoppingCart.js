import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {
          cart.length === 0
            ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
            : (
              <ul>
                { cart.map((product) => (
                  <li key={ product.data.id }>
                    <h2 data-testid="shopping-cart-product-name">{product.data.title}</h2>
                    <h4 data-testid="shopping-cart-product-quantity">
                      {product.quantity}
                    </h4>
                  </li>
                ))}
              </ul>
            )
        }
        <Link to="/finalizingpurchase">
          <button type="button" data-testid="checkout-products">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default ShoppingCart;
