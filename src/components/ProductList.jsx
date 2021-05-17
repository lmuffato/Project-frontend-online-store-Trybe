import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './styles/ProductList.css';

class ProductList extends Component {
  cardsElements = () => {
    const { data } = this.props;
    const { results } = data;
    return results.map((item) => (
      <Card
        title={ item.title }
        image={ item.thumbnail }
        price={ item.price }
        key={ item.id }
        data-testid="product"
      />
    ));
  };

  render() {
    return (
      <section id="product-list">
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
