import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      quant: '',
      totalPrice: '',
    };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount = () => {
    const { location } = this.props;
    const { state } = location;
    if (state !== undefined) {
      this.setState({
        quant: Number(state[3]),
        totalPrice: Number(state[1]),

      });
    }
  }

  handlePlusQnt = () => {
    this.setState((prevState) => ({
      quant: prevState.quant + 1,
    }));
  }

  handleMinusQnt = () => {
    this.setState((prevState) => ({
      quant: prevState.quant - 1,
    }));
  }

  validation = () => {
    const { location } = this.props;
    const { state } = location;
    const { quant, totalPrice } = this.state;
    if (state === undefined) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    return (
      <div data-testid="shopping-cart-product-name">
        <img src={ state[2] } alt="imagem" />
        {' '}
        Título:
        {state[0]}
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
        <Link
          to={ {
            pathname: '/checkout',
            state: [state[0], state[2], totalPrice, quant],
          } }

        >
          <button data-testid="checkout-products" type="button">
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to="/"> Voltar </Link>
        <h1> Carrinho de Compras </h1>
        { this.validation() }
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
