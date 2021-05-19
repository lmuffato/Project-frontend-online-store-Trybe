import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartContent extends Component {
  constructor() {
    super();
    this.createObjectIDsAndQuantities = this.createObjectIDsAndQuantities.bind(this);
    this.filteredItems = this.filterItems.bind(this);
  }

  filterItems(items) {
    const uniqueItems = [];
    uniqueItems.push(items[0]);
    items.forEach((item) => {
      let repeatedItem = 0;
      uniqueItems.forEach((uniqueItem) => {
        if (uniqueItem.id === item.id) repeatedItem += 1;
      });
      if (repeatedItem === 0) uniqueItems.push(item);
    });
    return uniqueItems;
  }

  createObjectIDsAndQuantities(items) {
    const uniqueIdsCollection = [];
    const idsAndQuantities = {};
    const idsCollection = items.map((item) => item.id);
    uniqueIdsCollection.push(idsCollection[0]);
    idsCollection.forEach((ID) => {
      let repeatedID = 0;
      uniqueIdsCollection.forEach((uniqueID) => {
        if (uniqueID === ID) repeatedID += 1;
      });
      if (repeatedID === 0) uniqueIdsCollection.push(ID);
    });
    uniqueIdsCollection.forEach((uniqueID) => {
      let repeatedID = 0;
      idsCollection.forEach((ID) => {
        if (uniqueID === ID) {
          repeatedID += 1;
        }
      });
      idsAndQuantities[uniqueID] = repeatedID;
    });
    return idsAndQuantities;
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
          {theAmount[item.id] * item.price}
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
    // console.log(this.createObjectIDsAndQuantities(items), 'nº elementos');
    const theAmount = this.createObjectIDsAndQuantities(items);
    // console.log(this.filterItems(items), 'last filter');
    const filteredItems = this.filterItems(items);
    // console.log(filteredItems, 'final items');
    return filteredItems[0] ? this.cartItems(filteredItems, theAmount) : emptyCart;
  }
}

CartContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default CartContent;
