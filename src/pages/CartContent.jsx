import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartContent extends Component {
  constructor() {
    super();
    this.createObjectIDsAndQuantities = this.createObjectIDsAndQuantities.bind(this);
    this.filteredItems = this.filterItems.bind(this);
    this.cartItems = this.cartItems.bind(this);
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
    const uniqueIDsCollection = [];
    const IDsAndQuantities = {};
    let IDsCollection = items.map((item) => item.id);
    IDsCollection = IDsCollection.sort();
    console.log(IDsCollection);
    uniqueIDsCollection.push(IDsCollection[0]);
    IDsCollection.forEach((ID) => {
      let repeatedID = 0;
      uniqueIDsCollection.forEach((uniqueID) => {
        if (uniqueID === ID) repeatedID += 1;
      });
      if (repeatedID === 0) uniqueIDsCollection.push(ID);
    });
    uniqueIDsCollection.forEach((uniqueID) => {
      let repeatedID = 0;
      IDsCollection.forEach((ID) => {
        if (uniqueID === ID) {
          repeatedID += 1;
        }
      });
      IDsAndQuantities[uniqueID] = repeatedID;
    });
    return IDsAndQuantities;
  }

  cartItems(items, IDsAndQuantities) {
    const { add, remove, find } = this.props;
    return items.map((item) => (
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
          {IDsAndQuantities[item.id] * item.price}
        </h2>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          Quantidade:
          {IDsAndQuantities[item.id]}
        </p>
        <span>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => { remove(find(item.id)); } }
          >
            -
          </button>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => { add(find(item.id)); } }
          >
            +
          </button>
        </span>
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
    const IDsAndQuantities = this.createObjectIDsAndQuantities(items);
    const filteredItems = this.filterItems(items);
    return filteredItems[0] ? this.cartItems(filteredItems, IDsAndQuantities) : emptyCart;
  }
}

CartContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  })),
  add: PropTypes.func,
  remove: PropTypes.func,
  find: PropTypes.func,
}.isRequired;

export default CartContent;
