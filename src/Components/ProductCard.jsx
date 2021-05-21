import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { availableQuantity, quantityOnCart, product,
      title, price, imagePath, id, onClick } = this.props;
    const myObj = {
      title,
      id,
      price,
      availableQuantity,
    };

    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ imagePath } alt="Imagem do produto" />
        <span>{price}</span>
        <Link
          to={ {
            pathname: `/details/${id}`,
            search: '',
            hash: '',
            state: { productDetail: product,
              cartSize: quantityOnCart,
            },
          } }
          data-testid="product-detail-link"
        >
          Mais Detalhes
        </Link>
        <button
          onClick={ () => onClick(myObj) }
          // value={ myObj }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  availableQuantity: PropTypes.number.isRequired,
  quantityOnCart: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  product: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
