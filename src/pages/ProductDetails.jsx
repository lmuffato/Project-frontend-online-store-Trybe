import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaBoxOpen } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';

import styles from './styles.module.css';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quant: 1,
    };
  }

  handleClickSom = ({ target: { innerText } }) => {
    this.setState(({ quant }) => ({
      quant: innerText === '-' ? quant - 1 : quant + 1,
    }));
  }

  render() {
    const string = ['available_quantity', 'thumbnail_id'];
    const { location, handleDetailsToCart, cartProductLength } = this.props;
    const { quant } = this.state;
    const { state: { product } } = location;
    const { title, price, shipping } = product;
    const estoque = product[string[0]];
    const image = product[string[1]];
    return (
      <main>
        <header className={ styles.pageHeader }>
          <Link to="/">
            <TiArrowBack className={ styles.iconArrow } />
          </Link>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <RiShoppingCartFill className={ styles.iconCartDetails } />
            <span
              className={ styles.contCart }
              data-testid="shopping-cart-size"
            >
              { cartProductLength }
            </span>
          </Link>
        </header>
        <section className={ styles.contentProductDetails }>
          <div className={ styles.contentImg }>
            <img className={ styles.imgProduct } src={ `https://http2.mlstatic.com/D_NQ_NP_${image}-O.webp` } alt={ title } />
          </div>
          <span className={ styles.titleDetails } data-testid="product-detail-name">
            { title }
          </span>
          <span>{ `Qtd. Disponível: ${estoque}` }</span>
          <div className={ styles.contentPriceFree }>
            <span className={ styles.priceProductDetails }>
              {`R$${(price * quant).toFixed(2)}`}
            </span>
            <button
              onClick={ this.handleClickSom }
              className={ styles.btnSub }
              type="button"
              disabled={ quant === 1 }
            >
              -
            </button>
            <p className={ styles.addQuantProductToCart }>{ quant }</p>
            <button
              onClick={ this.handleClickSom }
              className={ styles.btnAdd }
              type="button"
              disabled={ quant === estoque }
            >
              +
            </button>
            <button
              type="button"
              className={ styles.btnAddCartProduct }
              onClick={ () => handleDetailsToCart(product) }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
            { shipping.free_shipping
            && (
              <span className={ styles.detailsFrete } data-testid="free-shipping">
                <FaBoxOpen className={ styles.iconBoxFrete } />
                <p className={ styles.titleFrete }>Frete grátis</p>
              </span>
            ) }
          </div>
          <span className={ styles.quantStock }>
            { `Disponivel ${estoque} unidades em estoque!` }
          </span>
        </section>
        <div className={ styles.contentOpition }>
          <form className={ styles.contentFrom } action="">
            <h3 className={ styles.titleOption }>Avaliação</h3>
            <input
              className={ styles.inputOption }
              type="text"
              name="email"
              placeholder="E-mail"
            />
            <div className={ styles.contentStar }>estrelas</div>
            <textarea
              className={ styles.contentTextOption }
              data-testid="product-detail-evaluation"
              name="mensage"
              placeholder="Mensagem (Opcional)"
              rows="4"
            />
            <button className={ styles.btnOptionSubmit } type="button">Avaliar</button>
          </form>
          <hr className={ styles.hrFrom } />
          <div>
            <h3 className={ styles.titleOption }>Opiniões sobre o produto</h3>
            <div className={ styles.contentComentOption }>
              Nenhuma opnião sobre o produto.
            </div>
          </div>
          <div style={ { textAlign: 'center' } }>-</div>
        </div>
      </main>
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
        availableQuantity: PropTypes.number,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }),
      }),
    }),
  }).isRequired,
  handleDetailsToCart: PropTypes.func.isRequired,
  cartProductLength: PropTypes.number.isRequired,
};

export default ProductDetails;
