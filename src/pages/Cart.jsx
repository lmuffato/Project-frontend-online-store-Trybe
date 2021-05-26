import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      products: [],
    };
    this.productsCart = this.productsCart.bind(this);
  }

  handleClick = (event) => {
    this.state({
      [event.target.name]: event.target.value });
  }

  handleState(newProduct) {
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));
  }

  productsCart() {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <h2
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h2>);
    }
    return (
      products.map((product) => (
        <ProductCard
          img={ product.thumbnail }
          price={ product.price }
          id={ product.id }
          key={ product.id }
          handleClick={ this.handleClick }
        />
      )));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        { this.productsCart }
      </div>
    );
  }
}
