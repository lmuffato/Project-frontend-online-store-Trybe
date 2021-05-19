import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './styles/ProductList.css';
import serviceCart from '../services/serviceCart';

class ProductList extends Component {
  onclick = (addProduct) => {
    const { cartItemList } = serviceCart;

    if (cartItemList
      .map((element) => element.title === addProduct.title).includes(true)) {
      const a = cartItemList
        .filter((element) => element.title === addProduct.title).shift();
      addProduct.quantidade = a.quantidade;
      const index = cartItemList.indexOf(a);
      cartItemList.splice(index);
      addProduct.quantidade += 1;
      cartItemList.push(addProduct);
    } else {
      cartItemList.push(addProduct);
    }
    let contador = 0;
    cartItemList.forEach(({ quantidade }) => {
      contador += quantidade;
    });
    serviceCart.counter = contador;
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
