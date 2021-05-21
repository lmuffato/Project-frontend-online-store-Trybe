import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newCartItemId: [],
    };
  }

  addToCart = () => {
    const { location: { state: { product } } } = this.props;
    const { newCartItemId } = this.state;
    const item = { q: 1, id: product.sku };
    if (newCartItemId.length === 0) {
      newCartItemId.push(item);
    } else {
      newCartItemId[0].q += 1;
    }
    this.setState({ newCartItemId });
  }

  cartList = () => {
    const { cart } = this.state;
    return (
      <ol>
        { cart.map((item, index) => (
          <li
            data-testid="shopping-cart-product-name"
            key={ `${item.sku}${index}` }
          >
            {item.title}
          </li>
        )) }
      </ol>
    );
  }

  render() {
    const { location: { state: { product } } } = this.props; // location armazena as informações do produto no state e conseguimos acessar via props. Graças a dica da Lê no slack.
    const { data } = product;
    const { newCartItemId } = this.state;
    console.log(data);
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <img src={ product.image } alt={ `Foto do produto ${product.title}` } />
        <h3>{ `R$: ${parseFloat(product.price).toFixed(2)}` }</h3>
        <CartButton data={ data } newCartItemId={ newCartItemId } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
        <br />
        {/* essa parte era pra ser renderizada dentro do carrinho */}
        <span data-testid="shopping-cart-product-quantity">
          quantidade:
          {newCartItemId.length === 0 ? 0 : newCartItemId[0].q}
        </span>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
