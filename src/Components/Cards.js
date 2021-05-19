import React from 'react';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div className="products-cards">
        <div data-testid="product">
          <p>{title}</p>
          <p>{price}</p>
          <img style={ { width: '100px' } } src={ thumbnail } alt="imagem" />
        </div>
      </div>
    );
  }
}
Cards.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default Cards;
