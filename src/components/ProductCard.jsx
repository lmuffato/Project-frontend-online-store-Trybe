import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import serviceCart from '../services/serviceCart';

class ProductCard extends Component {
  getProductAtributes = () => {
    const { title, price, imagePath } = this.props;
    const productData = {
      title,
      imagePath,
      quantity: 1,
      price,
    };
    const { cartItemList } = serviceCart;
    cartItemList.push(productData);
  };

  render() {
    const { title, price, imagePath, id, product } = this.props;
    // alteração do preço feita de acordo com este fórum https://pt.stackoverflow.com/questions/181922/formatar-moeda-brasileira-em-javascript
    const realPrice = `${(new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL' })
      .format(price))}`;

    return (
      <div data-testid="product" className="product-card">
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${imagePath}-O.webp` } alt="Imagem do produto" />
        <h1>{title}</h1>
        <p>{realPrice}</p>
        <button
          type="button"
          className="btn-details"
        >
          <Link
            to={ {
              pathname: `/Products/${id}`,
              state: { product },
            } }
            data-testid="product-detail-link"
          >
            VER DETALHES
          </Link>
        </button>
        <button
          data-testid="product-add-to-cart"
          type="button"
          className="addToCard"
          onClick={ this.getProductAtributes }
          product={ product }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: string,
  imagePath: string,
  price: number,
}.isRequired;

export default ProductCard;
