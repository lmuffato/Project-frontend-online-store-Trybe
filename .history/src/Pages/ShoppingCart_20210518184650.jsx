import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartSize from '../Components/CartSize';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { products, quantity } = this.props;
    this.state = {
      products,
      quantity,
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
    console.log(value);
    this.setState((prevState) => ({
      quantity: { ...prevState.quantity,
        [value]: prevState.quantity[value] + 1 },
    }));
  }

  handleDelete = ({ target }) => {
    const { value } = target;
    const { products, quantity } = this.state;
    delete quantity[value];
    const filteredProducts = products.filter((prod) => prod !== value);

    this.setState({
      products: [...filteredProducts],
    });
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
        <p>oi cleber</p>
        {reducedProducts.map((product) => (
          <div className="product-shopping-cart" key={ product }>
            <p data-testid="shopping-cart-product-name">{product}</p>
            <section
              className="product-quantity-manipulation"
              style={ { display: 'flex', flexDirection: 'row' } }
            >
              <button
                type="button"
                value={ product }
                onClick={ this.handleDecrease }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantity[product]}</p>
              <button
                type="button"
                value={ product }
                onClick={ this.handleIncrease }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ product }
                onClick={ this.handleDelete }
                data-testid="product-delete"
              >
                Deletar
              </button>
            </section>
          </div>
        ))}
        <Link to="/">VOLTAR</Link>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ShoppingCart;
