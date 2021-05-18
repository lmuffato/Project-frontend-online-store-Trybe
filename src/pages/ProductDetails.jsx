import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { state: { product } } = location;
    const { title, thumbnail, price } = product;
    return (
      <section>
        <div>
          <section>
            <span data-testid="product-detail-name">{ title }</span>
            <img src={ thumbnail } alt={ title } />
            <span>{`R$${price}`}</span>
          </section>
          <Link to="/carrinho">
            <button type="button">Ir para o Carrinho</button>
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
};

export default ProductDetails;
