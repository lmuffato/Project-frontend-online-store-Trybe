import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;

    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <Link
          to={ { pathname: `/product${id}`, state: { product },
          } }
          data-testid="product-detail-link"
        >
          Mostrar detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;

// Referências:
// Para adaptar ao class Component, consultamos a documentação indicada pela Le:
// Link da thread: https://trybecourse.slack.com/archives/C01L16B9XC7/p1621287630135100
// Link da documentação: https://reactrouter.com/web/api/location
// Consulta ao PR da turma 07:
// https://github.com/tryber/sd-07-project-frontend-online-store/blob/group-19-requisito8-add-item-to-cart/src/Pages/ProductDetails.jsx
