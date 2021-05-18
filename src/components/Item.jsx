import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { title, imagePath, price, func } = this.props;
    return (
      <div data-testid="product">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <button
          type="button"
          onClick={ () => func(this.props) }
          data-testid="product-add-to-cart"
        >
          Add To Cart
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default Item;
