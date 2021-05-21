import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { cartProduct } = this.props;
    this.state = {
      cartProduct,
    };
  }

  render() {
    const { cartProduct } = this.state;
    const cartItems = (
      <section>
        {cartProduct.map(({ id, price, thumbnail, title }) => (
          <div key={ id }>
            <h1 data-testid="shopping-cart-product-name">{title}</h1>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
            <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
          </div>))}
      </section>
    );
    const noItems = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
    return (
      <div>
        { cartProduct.length === 0 ? noItems : cartItems}
        <Link to="/checkout" data-testid="checkout-products">
          <Button>
            Ir para o carrinho
          </Button>
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  cartProduct: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Cart;
