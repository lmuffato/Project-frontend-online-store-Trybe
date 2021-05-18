import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props; // location armazena as informações do produto no state e conseguimos acessar via props. Graças a dica da Lê no slack.
    return (
      <div>
        {/* <h1>Detalhes do Produto:</h1> */}
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <img src={ product.image } alt={ `Foto do produto ${product.title}` } />
        <h3>{ `R$: ${parseFloat(product.price).toFixed(2)}` }</h3>
        <Link to="./ShoppingCartPage">Carrinho de compras</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
