import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ButtonAdd extends Component {
   counter = () => {
    const { newCartItem } = this.props;
    return newCartItem.reduce((acc, cur) => acc + cur.qtd, 0);
  }

 /*  handleClick = () => {
    const { productSelected } = this.props;
  } */

  render() {
    const { cartItems, newCartItem } = this.props;
    return (
      <div>
         <Link
            to={ { pathname: '/Cart', state: { cartItems, newCartItem } } }
          >
            <button type="button" data-testid="product-add-to-cart">
              Adicionar ao carrinho
            </button>
            {/*  {`Carrinho ${this.counter()}`} */}
          </Link>
      </div>
    );
  }
}

ButtonAdd.propTypes = {
  cartItems: PropTypes.arrayOf(Object),
  newCartItem: PropTypes.string,
};

ButtonAdd.defaultProps = {
  cartItems: [],
  newCartItem: '',
};
