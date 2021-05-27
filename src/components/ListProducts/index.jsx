import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

class ListProducts extends React.Component {
  render() {
    const { productsList, addToCart } = this.props;

    return (
      <>
        { productsList.map(
          ({ title, price, thumbnail, id, attributes, shipping }) => (<Product
            title={ title }
            imagePath={ thumbnail }
            price={ price }
            key={ id }
            addToCart={ addToCart }
            itemId={ id }
            techSpecs={ { title, price, thumbnail, attributes } }
            free_shipping={ shipping.free_shipping }
          />),
        )}
      </>
    );
  }
}

ListProducts.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.object,
  ),
  func: PropTypes.func,
}.isRequired;

export default ListProducts;
