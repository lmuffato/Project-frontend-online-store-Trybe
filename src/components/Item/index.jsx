import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Item extends React.Component {
  render() {
    const { title, imagePath, price } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
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
