import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../NotFound';

class CardProduct extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        {products.length === 0 ? <NotFound />
          : products.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
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
