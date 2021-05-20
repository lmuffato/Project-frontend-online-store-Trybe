import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './styles/ProductList.css';

class ProductList extends Component {
  cardsElements = () => {
    const { data, getId } = this.props;
    if (data !== undefined) {
      const { results } = data;
      return results.map((item) => (
        <div key={ item.id } data-testid="product">
          <Card
            sku={ item.id }
            title={ item.title }
            image={ item.thumbnail }
            price={ item.price }
          />
          <button
            onClick={ getId }
            type="button"
            SKU={ item.id }
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      ));
    }
  };

  render() {
    return (
      <section className="product-list">
        { this.cardsElements() }
      </section>
    );
  }
}

ProductList.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
    map: PropTypes.func,
  }),
}.isRequired;

export default ProductList;
