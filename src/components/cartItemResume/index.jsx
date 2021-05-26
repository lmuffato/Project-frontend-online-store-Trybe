import React from 'react';
import PropTypes from 'prop-types';

class CartItemResume extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h2>{title}</h2>
        <h2>{`R$ ${price}`}</h2>
      </div>
    );
  }
}

CartItemResume.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default CartItemResume;
