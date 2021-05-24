import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  counter = () => {
    const { newCartItemId } = this.props;
    return newCartItemId.reduce((accumulator, current) => accumulator + current.q, 0);
  }

  render() {
    const { data, newCartItemId } = this.props;
    return (
      <nav>
        <button type="button">
          <Link
            to={ { pathname: '/ShoppingCartPage', state: { data, newCartItemId } } }
            data-testid="shopping-cart-button"
          >
            {`Carrinho ${this.counter()}`}
          </Link>
        </button>
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
