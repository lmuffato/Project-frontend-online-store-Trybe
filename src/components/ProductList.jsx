import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    if (products === 'none') return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        { products.map((product) => (
          <div data-testid="product" key={ product.id }>
            <h1>{ product.title }</h1>
            <img src={ product.thumbnail } alt={ product.title } />
            <span>{ product.price }</span>
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: `/produto/${product.id}`,
                state: { product },
              } }
            >
              Saiba mais
            </Link>
            <AddToCart product={ product } />
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  isClicked: PropTypes.bool,
}.isRequired;

export default ProductList;
