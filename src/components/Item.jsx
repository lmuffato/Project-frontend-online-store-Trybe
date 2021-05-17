import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  render() {
    const { title, imagePath, price, itemId, query } = this.props;
    return (
      <div data-testid="product">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <Link to={ `/item-details/${query}/${itemId}` } data-testid="product-detail-link">
          <button
            type="button"
          >
            Ver detalhes
          </button>
        </Link>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  price: PropTypes.number,
  itemId: PropTypes.string,
}.isRequired;

export default Item;
