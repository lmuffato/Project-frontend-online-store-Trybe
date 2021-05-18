import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { location: { state: { item } } } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <section>
          {item.map(({ id, price, thumbnail, title }) => (
            <div key={ id }>
              <h1 data-testid="shopping-cart-product-name">{title}</h1>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
            </div>))}
        </section>
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Cart;
