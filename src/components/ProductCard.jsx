import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';
import Button from './Button';
import free from '../imagens/free.png';
// import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="product-box">
        <Link
          to={ `/${item.id}` }
          data-testid="product-detail-link"
          className="product-detail-link"
        >
          <div data-testid="product" className="product">
            <h3>{item.title}</h3>
            <img src={ item.thumbnail } alt={ item.title } width="120px" />
            <p>
              Preço:
              {item.price}
            </p>
            {(item.shipping.free_shipping)
              ? <img src={ free } alt="free" data-testid="free-shipping" width="45%" />
              : <p />}
          </div>
        </Link>
        <Button
          item={ item }
          dataTestId="product-add-to-cart"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
