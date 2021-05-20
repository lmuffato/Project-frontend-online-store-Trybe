import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartShopPage extends React.Component {
  validation = () => {
    const { location } = this.props;
    const { state } = location;
    if (state === undefined) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    const [title, price, thumbnail, qnt] = state;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">
          {' '}
          Título:
          {title}
        </p>
        <p>
          {' '}
          Preço:
          {price}
        </p>
        <img src={ thumbnail } alt="imagem" />
        <p data-testid="shopping-cart-product-quantity">
          {' '}
          Quantidade:
          {qnt}
        </p>
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
