import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, price, image } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{image}</p>
        <p>{price}</p>
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
