import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, price, image } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ image } alt="foto do produto" />
        <p>{`R$: ${price}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
