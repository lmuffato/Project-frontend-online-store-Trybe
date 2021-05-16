import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { products, quantity } = this.props;
    this.state = {
      empty: true,
      products,
      quantity,
    };
  }

  componentDidMount() {
    this.changeEmpty();
  }

  handleSubtractButton = (event) => {
    const { quantity } = this.state;
    const { value } = event.target;
    if (quantity[value] > 1) {
      this.setState((paststate) => ({
        quantity: {
          ...paststate.quantity,
          [value]: paststate.quantity[value] - 1,
        },
      }));
    }
  }

  handleAddButton = (event) => {
    const { value } = event.target;
    this.setState((paststate) => ({
      quantity: {
        ...paststate.quantity,
        [value]: paststate.quantity[value] + 1,
      },
    }));
  }

  handleExcludeButton = (event) => {
    const { value } = event.target;
    const { products } = this.state;
    const filtered = products.filter((element) => element !== value);
    this.setState({
      products: [...filtered],
      empty: true,
    });
  }

  changeEmpty = () => {
    const { products } = this.state;
    if (products.length > 0) {
      this.setState({
        empty: false,
      });
    }
  }

  reduce = (arr) => {
    const reduced = [];
    arr.forEach((element) => {
      if (!reduced.includes(element)) {
        reduced.push(element);
      }
    });
    return reduced;
  }

  conditionalEmpty = () => {
    const { empty } = this.state;
    if (empty) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
  }

  render() {
    const { products, quantity } = this.state;
    const reducedProducts = this.reduce(products);
    return (
      <div>
        {this.conditionalEmpty()}
        <ul>
          { reducedProducts.map((element) => (
            <li key={ element }>
              <h1 data-testid="shopping-cart-product-name">{element}</h1>
              <h2 data-testid="shopping-cart-product-quantity">{quantity[element]}</h2>
              <button
                type="button"
                value={ element }
                onClick={ this.handleSubtractButton }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <button
                type="button"
                value={ element }
                onClick={ this.handleAddButton }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ element }
                onClick={ this.handleExcludeButton }
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  quantity: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ShoppingCart;
