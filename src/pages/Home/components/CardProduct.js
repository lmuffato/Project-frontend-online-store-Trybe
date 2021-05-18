import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound';

class CardProduct extends React.Component {
  render() {
    const { products, setCart } = this.props;

    return (
      <div>
        {products.length === 0 ? <NotFound />
          : products.map((product) => (
            <div key={ product.id } data-testid="product">
              <Link
                to={ {
                  pathname: `/product/${product.category_id}/${product.id}`,
                  state: { products },
                } }
                data-testid="product-detail-link"
              >
                <p>{product.title}</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ setCart }
                id={ product.id }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default CardProduct;
