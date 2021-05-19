import React from 'react';
import PropTypes from 'prop-types';

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
        { cartProduct.length === 0 ? noItems : cartItems }
        ;
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          price: PropTypes.number,
          thumbnail: PropTypes.string,
          title: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};

export default Cart;
