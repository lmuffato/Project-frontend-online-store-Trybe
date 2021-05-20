import React, { Component } from 'react';
import '../styles/ProductDetails.css';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';
import Star from '../Components/Star';
import EstrelaDourada from '../Pictures/EstrelaDourada.png';
import EstrelaTransparente from '../Pictures/EstrelaTransparente.png';

class ProductDetails extends Component {
  constructor() {
    super();
    const whiteStar = EstrelaTransparente;
    const yellowStar = EstrelaDourada;
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
    const { location: { state: { title, price, thumbnail } } } = this.props;
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
          <button type="button">
            <Link to="/">
              <img
                className="back"
                src="https://image.flaticon.com/icons/png/512/64/64516.png"
                alt="voltar"
              />
            </Link>
          </button>
          <button type="button">
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
                className="shopping-cart"
                src="https://img2.gratispng.com/20180425/lcq/kisspng-computer-icons-shopping-cart-5ae061983e57a6.1325375415246544882554.jpg"
                alt="carrifinaliozarnho de compras"
              />
            </Link>
          </button>
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
  title: string,
  thumbnail: string,
  price: number,
}.isRequired;

export default ProductDetails;
