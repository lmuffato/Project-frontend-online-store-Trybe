import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { title, img, price, id, currItem } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ img } alt="foto do item" />
        <p>
          Price: R$
          { price }
        </p>
        {/*
        para a resolução do requisito 7, usamos como referência o state do Link
        https://reactrouter.com/web/api/Link
        */}
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/productdetails/${id}`,
            state: currItem,
          } }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default ProductCard;
