import React, { Component } from 'react';
import { number, string, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';
import Star from '../Components/Star';
import EstrelaDourada from '../Pictures/EstrelaDourada.png';
import EstrelaTransparente from '../Pictures/EstrelaTransparente.png';
import AddCart from '../Components/AddCart';

import '../styles/ProductDetails.css';

class ProductDetails extends Component {
  constructor() {
    super();
    const whiteStar = EstrelaTransparente;
    const yellowStar = EstrelaDourada;
    this.state = {
      cart: [],
      white: whiteStar,
      // rating: 0,
      arrayStars: [whiteStar, whiteStar, whiteStar, whiteStar, whiteStar],
      yellow: yellowStar,
    };
  }

  productToCart = (productObj) => {
    this.setState(({ cart }) => ({
      cart: [...cart, productObj],
    }));
  }

  changeStar = (id) => {
    const { arrayStars, white, yellow } = this.state;
    const newStars = arrayStars.map((src, index) => {
      if (index + 1 <= id) return yellow;
      return white;
    });
    this.setState(({
      // rating: id,
      arrayStars: newStars,
    }));
  }

  render() {
    const {
      location: { state: { title, price, thumbnail, product } },
      history: { goBack } } = this.props;
    const { arrayStars, cart } = this.state;
    return (
      <>
        <div className="detailsContainer">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumbnail } alt="produto" className="imageProduct" />
          <span>{`R$ ${price}`}</span>
          <br />
        </div>
        <section className="botoes">
          <button type="button" onClick={ goBack }>
            <img
              className="back"
              src="https://image.flaticon.com/icons/png/512/64/64516.png"
              alt="voltar"
            />
          </button>
          <AddCart
            product={ { ...product } }
            productToCart={ this.productToCart }
            dataTestId="product-detail-add-to-cart"
          />
          <Link
            to={ {
              pathname: '/shopping-cart',
              state: { cart },
            } }
            data-testid="shopping-cart-button"
          >
            <img
              className="shopping-cart-icon"
              src="https://image.flaticon.com/icons/png/128/833/833314.png"
              alt="carrinho de compras"
            />
          </Link>
        </section>
        <form>
          <fieldset>
            <legend>Avaliações</legend>
            <label htmlFor="comentarios">
              <input
                className="assessments"
                type="text"
                placeholder="Email"
              />
            </label>
            <textarea
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
            />
            <div>
              {arrayStars.map((src, index) => (
                <Star
                  key={ index }
                  id={ index + 1 }
                  src={ src }
                  onClick={ this.changeStar }
                />))}
            </div>
            <button className="submit" type="button">Avaliaçao</button>
          </fieldset>
        </form>

      </>
    );
  }
}

ProductDetails.propTypes = {
  location: shape({
    state: shape({
      title: string,
      price: number,
      thumbnail: string,
    }),
  }).isRequired,
  history: shape({
    goBack: func,
  }).isRequired,
};

export default ProductDetails;
