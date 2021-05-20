import React, { Component } from 'react';
import { number, string, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';

import Star from '../Components/Star';

import '../styles/ProductDetails.css';

class ProductDetails extends Component {
  constructor() {
    super();
    const whiteStar = 'https://img-premium.flaticon.com/png/512/16/16078.png?token=exp=1621369569~hmac=4bd5c4cf7438fdd55983efcab05fac42';
    const yellowStar = 'https://img-premium.flaticon.com/png/512/1820/1820006.png?token=exp=1621370572~hmac=7b6b1b98c1f083de5e7bbc39c2d56a47';
    this.state = {
      white: whiteStar,
      // rating: 0,
      arrayStars: [whiteStar, whiteStar, whiteStar, whiteStar, whiteStar],
      yellow: yellowStar,
    };
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
      location: { state: { title, price, thumbnail } },
      history: { goBack } } = this.props;
    const { arrayStars } = this.state;
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
          <Link
            to={ {
              pathname: '/shopping-cart',
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
