import React from 'react';
import PropTypes from 'prop-types';
import CartItemResume from '../cartItemResume';

class CartResume extends React.Component {
  render() {
    const { cardProducts, totalPrice } = this.props;
    return (
      <>
        <h1>Revise Seus Produtos</h1>
        <div>
          {cardProducts.map(({ title, price, thumbnail }) => (
            <CartItemResume
              key={ title }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
            />
          ))}
        </div>
        <h1>{ `Total R$ ${totalPrice}`}</h1>
      </>
    );
  }
}

CartResume.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
}.isRequired;

export default CartResume;
