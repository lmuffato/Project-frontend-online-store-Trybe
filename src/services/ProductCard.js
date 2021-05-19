import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, imagePath, id, button } = this.props;
    return (
      <div data-testid="product" id={ id }>
        <h2>{title}</h2>
        <img
          src={ imagePath }
          width="250"
          alt="Imagem do produto"
        />
        <span>{price}</span>
        { button }
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
