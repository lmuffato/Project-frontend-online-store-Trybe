import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

class ListProducts extends React.Component {
  render() {
    const { arrayOfItems } = this.props;
    return (
      <>
        { arrayOfItems.map(
          ({ title, price, thumbnail, id, attributes }) => (<Product
            title={ title }
            imagePath={ thumbnail }
            price={ price }
            key={ id }
            itemId={ id }
            techSpecs={ { title, price, thumbnail, attributes } }
          />),
        )}
      </>
    );
  }
}

ListProducts.propTypes = {
  arrayOfItems: PropTypes.arrayOf(
    PropTypes.object,
  ),
}.isRequired;

export default ListProducts;
