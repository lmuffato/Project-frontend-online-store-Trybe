import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './styles/ProductList.css';
import serviceCart from '../services/products';

class ProductList extends Component {
  onclick = (addProduct) => {
    const { products } = serviceCart;

    if (products.map((element) => element.title === addProduct.title).includes(true)) {
      const a = products.filter((element) => element.title === addProduct.title).shift();
      addProduct.quantidade = a.quantidade;
      const index = products.indexOf(a);
      products.splice(index);
      addProduct.quantidade += 1;
      products.push(addProduct);
    } else {
      products.push(addProduct);
    }
    let contador = 0;
    products.forEach(({ quantidade }) => {
      contador += quantidade;
    });
    serviceCart.counter = contador;
    // console.log(products);
  }

  cardsElements = () => {
    const { data } = this.props;
    if (data !== undefined) {
      const { results } = data;
      return results.map((item) => (
        <Card
          onclick={ this.onclick }
          title={ item.title }
          image={ item.thumbnail }
          price={ item.price }
          key={ item.id }
          data-testid="product"
        />
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
