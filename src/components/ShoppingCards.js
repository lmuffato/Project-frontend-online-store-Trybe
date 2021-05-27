import React from 'react';
import PropTypes from 'prop-types';
import QtdItems from './QtdItems';

class ShoppingCards extends React.Component {
  render() {
    const { title, price, imagePath, id, qtd } = this.props;
    return (
      <div id={ id }>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <img
          src={ imagePath }
          width="250"
          alt="Imagem do produto"
        />
        <span>{(price * qtd.qtd).toFixed(2)}</span>
        <br />
        {/* <span data-testid="shopping-cart-product-quantity">{qtd.qtd}</span> */}
        <QtdItems qtd={ qtd.qtd } changeQtd={ qtd.changeQtd } id={ id } />

      </div>
    );
  }
}

ShoppingCards.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  qtd: PropTypes.shape({
    qtd: PropTypes.number,
    changeQtd: PropTypes.func,
  }).isRequired,
};

export default ShoppingCards;
