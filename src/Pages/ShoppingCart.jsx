import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { state } = location;
    const { products, productsQuantity } = state;
    this.state = {
      products,
      quantity: productsQuantity,
    };
  }

  handleDecrease = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => ({
      quantity: { ...prevState.quantity,
        [value]: prevState.quantity[value] - 1 },
    }));
  }

  handleIncrease = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => ({
      quantity: { ...prevState.quantity,
        [value]: prevState.quantity[value] + 1 },
    }));
  }

  handleDelete = ({ target }) => {
    const { value } = target;
    const { products, quantity } = this.state;
    delete quantity[value];
    const filteredProducts = products.filter(({ title }) => title !== value);

    this.setState({
      products: [...filteredProducts],
    });
  }

  reduce = (arr) => {
    const reduced = [];
    const newArray = [];
    arr.forEach((element) => {
      if (!reduced.includes(element.title)) {
        reduced.push(element.title);
        newArray.push(element);
      }
    });
    return newArray;
  }

  render() {
    const { products, quantity } = this.state;
    const reducedProducts = this.reduce(products);

    if (reducedProducts.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <>
        {reducedProducts.map(({ title, id }) => (
          <div className="product-shopping-cart" key={ id }>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <section
              className="product-quantity-manipulation"
              style={ { display: 'flex', flexDirection: 'row' } }
            >
              <button
                type="button"
                value={ title }
                onClick={ this.handleDecrease }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantity[title]}</p>
              <button
                type="button"
                value={ title }
                onClick={ this.handleIncrease }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ title }
                onClick={ this.handleDelete }
                data-testid="product-delete"
              >
                Deletar
              </button>
            </section>
          </div>
        ))}
        <Link to="/">VOLTAR</Link>
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/checkout',
            search: '',
            hash: '',
            state: { products: reducedProducts, quantity },
          } }
        >
          Finalizar compra
        </Link>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf({
    title: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
