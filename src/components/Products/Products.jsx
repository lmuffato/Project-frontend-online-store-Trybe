import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Uso de 'Link to: object' abaixo baseado em https://reactrouter.com/web/api/Link

class Products extends Component {
  render() {
    const { mlItems, callBack } = this.props;
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
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => callBack(item) }
            >
              Adicionar ao Carrinho
            </button>
          </section>))}
      </section>
    );
  }
}

Products.propTypes = {
  mlItems: PropTypes.arrayOf(PropTypes.object),
  callBack: PropTypes.func,
}.isRequired;

export default Products;
