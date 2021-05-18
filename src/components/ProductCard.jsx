import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    const { product } = this.props;
    this.state = {
      product,
    };
  }

  onClick() {
    const { product } = this.state;
    console.log(product);
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <AddToCart onClick={ this.onClick } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
