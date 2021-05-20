import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location, handleDetailsToCart } = this.props;
    const { state: { product } } = location;
    const { title, thumbnail, price, shipping } = product;
    return (
      <section>
        <div>
          <section>
            <span data-testid="product-detail-name">{ title }</span>
            <img src={ thumbnail } alt={ title } />
            <span>{`R$${price}`}</span>
            { shipping.free_shipping
            && <span data-testid="free-shipping">Frete grátis</span> }
            <button
              type="button"
              onClick={ () => handleDetailsToCart(product) }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
          </section>
          <Link to="/carrinho">
            <button
              data-testid="shopping-cart-button"
              type="button"
            >
              Ir para o Carrinho
            </button>
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
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }),
      }),
    }),
  }).isRequired,
  handleDetailsToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
