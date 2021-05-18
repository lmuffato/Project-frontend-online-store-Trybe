import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Uso de 'Link to: object' abaixo baseado em https://reactrouter.com/web/api/Link

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
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: `/product/${item.id}`,
                state: { ...item },
              } }
            >
              <h2>{item.title}</h2>
              <img
                src={ item.thumbnail }
                alt={ `Produto ${item.title}` }
              />
              <h2>{item.price}</h2>
            </Link>
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
