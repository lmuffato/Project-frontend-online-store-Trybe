import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartContent extends Component {
  constructor() {
    super();
    this.Map = this.Map.bind(this);
    this.lastFilter = this.lastFilter.bind(this);
  }

  lastFilter(items) {
    const firstFilter = [];
    firstFilter.push(items[0]);
    items.forEach((itm) => {
      let n = 0;
      firstFilter.forEach((content) => {
        if (content.id === itm.id) n += 1;
        // console.log(firstFilter, 'filter');
      });
      if (n === 0) firstFilter.push(itm); // id não repetidos
    });
    return firstFilter;
  }

  Map(items) {
    const firstFilter = [];
    const secondFilter = {};
    let result = items.map((item) => item.id);
    result = result.sort();
    firstFilter.push(result[0]);
    result.forEach((itm) => {
      let n = 0;
      firstFilter.forEach((content) => {
        if (content === itm) n += 1;
        // console.log(firstFilter, 'filter');
      });
      if (n === 0) firstFilter.push(itm); // id não repetidos
    });
    firstFilter.forEach((content) => {
      let n = 0;
      result.forEach((itm) => {
        if (content === itm) {
          n += 1;
        }
      });
      secondFilter[content] = n;
      // console.log(secondFilter, '2filter'); objeto comtendo o valor de repetições do respectivo id
    });
    return secondFilter;
  }

  cartItems(finalItems, theAmount) {
    return finalItems.map((item) => (
      <section
        key={ item.id }
      >
        <h2
          data-testid="shopping-cart-product-name"
        >
          {item.title}
        </h2>
        <img
          src={ item.thumbnail }
          alt={ `Produto ${item.title}` }
        />
        <h2>
          {item.price}
        </h2>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          Quantidade:
          {theAmount[item.id]}
        </p>
      </section>));
  }

  render() {
    const emptyCart = (
      <section style={ { textAlign: 'center' } }>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
          <br />
          <img
            style={ { width: '100px' } }
            src="./images/emptyCart.png"
            alt="Carrinho vázio"
          />
        </p>
      </section>);

    const { items } = this.props;
    console.log(/* items */this.Map(items), 'nº elementos');
    const theAmount = this.Map(items);
    // console.log(this.state);
    console.log(this.lastFilter(items), 'last filter');
    const finalItems = this.lastFilter(items);
    console.log(finalItems, 'final items');
    return finalItems[0] ? this.cartItems(finalItems, theAmount) : emptyCart;
  }
}

CartContent.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CartContent;
