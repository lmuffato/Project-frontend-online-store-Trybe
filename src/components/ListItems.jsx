import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class ListItems extends React.Component {
  render() {
    const { arrayOfItems } = this.props;
    return (
      <>
        { arrayOfItems.map(
          ({ title, price, thumbnail, id }) => (<Item
            title={ title }
            imagePath={ thumbnail }
            price={ price }
            key={ id }
          />),
        )}
      </>
    );
  }
}

ListItems.propTypes = {
  arrayOfItems: PropTypes.arrayOf(
    PropTypes.object,
  ),
}.isRequired;

export default ListItems;
