import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiShoppingCartFill } from 'react-icons/ri';

class ProductDetails extends Component {
  render() {
    const { location, handleDetailsToCart, cartProductLength } = this.props;
    const { state: { product } } = location;
    const { title, thumbnail, price } = product;
    return (
      <section>
        <div>
          <section>
            <span data-testid="product-detail-name">{ title }</span>
            <img src={ thumbnail } alt={ title } />
            <span>{`R$${price}`}</span>
            <button
              type="button"
              onClick={ () => handleDetailsToCart(product) }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
          </section>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <RiShoppingCartFill />
            <span data-testid="shopping-cart-size">{ cartProductLength }</span>
          </Link>
        </div>
        <div>pagamento</div>
        <div>
          <form action="">
            <input type="text" name="email" placeholder="E-mail" />
            <div>estrelas</div>
            <textarea
              data-testid="product-detail-evaluation"
              name="mensage"
              placeholder="Mensagem (Opcional)"
            />
            <button type="button">Avaliar</button>
          </form>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
  handleDetailsToCart: PropTypes.func.isRequired,
  cartProductLength: PropTypes.number.isRequired,
};

export default ProductDetails;
