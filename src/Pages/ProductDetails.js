import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: { title, price, thumbnail } } } = this.props;
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
                alt="carrinho de compras"
              />
            </Link>
          </button>
        </section>
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
