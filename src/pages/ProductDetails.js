import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  addToCart = () => {
    const { location: { state: { product } } } = this.props;
    const { cartList } = this.state;
    const updateCart = [...cartList, product];
    this.setState({ cartList: updateCart });
  }

  render() {
    const { location: { state: { product } } } = this.props; // location armazena as informações do produto no state e conseguimos acessar via props. Graças a dica da Lê no slack.
    const { cartList } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <img src={ product.image } alt={ `Foto do produto ${product.title}` } />
        <h3>{ `R$: ${parseFloat(product.price).toFixed(2)}` }</h3>
        <Link to="./ShoppingCartPage">Carrinho de compras</Link>
        <br />
        <CartButton data={ cartList } newCartItemId={ cartList } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
        <br />
        <span data-testid="shopping-cart-product-quantity">
          quantidade:
          {cartList.length}
        </span>
        <ol>
          { cartList.map((item, index) => (
            <li
              data-testid="shopping-cart-product-name"
              key={ `${item.sku}${index}` }
            >
              {item.title}
            </li>
          )) }
        </ol>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
