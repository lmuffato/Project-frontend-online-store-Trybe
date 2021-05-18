import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { mlItems } = this.props;
    return (
      <section>
        {mlItems.map((item) => (
          <section
            data-testid="product"
            key={ item.id }
          >
            <h2>{item.title}</h2>
            <img src={ item.thumbnail } alt={ `Produto ${item.title}` } />
            <h2>{item.price}</h2>
          </section>))}
      </section>
    );
  }
}

Products.propTypes = {
  mlItems: PropTypes
    .arrayOf(PropTypes.object)
    .isRequired,
};

export default Products;
