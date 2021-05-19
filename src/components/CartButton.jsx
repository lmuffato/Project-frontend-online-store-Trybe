import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  render() {
    const { data, newCartItemId } = this.props;
    return (
      <nav>
        <button type="button">
          <Link
            to={ { pathname: '/ShoppingCartPage', state: { data, newCartItemId } } }
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </button>
        <p>contador</p>
      </nav>
    );
  }
}

CartButton.propTypes = {
  data: PropTypes.arrayOf(Object),
  newCartItemId: PropTypes.string,
};

CartButton.defaultProps = {
  data: [],
  newCartItemId: '',
};

export default CartButton;
