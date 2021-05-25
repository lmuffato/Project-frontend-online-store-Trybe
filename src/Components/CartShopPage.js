import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      quant: 1,
      totalPrice: '',
      products: [],
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  // qntFromStorage = () => {
  //   const { products } = this.state;
  //   products.map((product) => this.setState({
  //     quant: product[3],
  //   }), console.log(this.state.quant));
  // }

  getFromLocalStorage = () => {
    const parsedProducts = JSON.parse(localStorage.getItem('products')) || [];
    this.setState({
      products: parsedProducts,
    });
  }

  handlePlusQnt = () => {
    this.setState((prev) => ({
      quant: prev.value + 1,
    }));
  }

  handleMinusQnt = () => {
    this.setState((prev) => ({
      quant: prev.quant - 1,
    }));
  }

  validation = () => {
    const { quant, totalPrice, products } = this.state;
    console.log(quant);
    if (products.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return products.map((product) => (
      <div key={ Math.random() * 1000 } data-testid="shopping-cart-product-name">
        <img style={ { width: '100px' } } src={ product[2] } alt="imagem" />
        {' '}
        Título:
        {product[0]}
        <br />
        <button
          data-testid="product-increase-quantity"
          onClick={ this.handlePlusQnt }
          type="button"
        >
          +

        </button>
        <p data-testid="shopping-cart-product-quantity">
          {' '}
          Quantidade:
          {quant}
        </p>
        <button
          data-testid="product-decrease-quantity"
          onClick={ this.handleMinusQnt }
          type="button"
        >
          -

        </button>
        <p>
          {' '}
          Preço:
          {totalPrice}
        </p>

      </div>

    ));
  }

  render() {
    return (
      <div>
        <Link to="/"> Voltar </Link>
        <h1> Carrinho de Compras </h1>
        { this.validation() }
        <div>
          <Link
            to="/checkout"

          >
            <button data-testid="checkout-products" type="button">
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

CartShopPage.propTypes = {
  location: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default CartShopPage;
