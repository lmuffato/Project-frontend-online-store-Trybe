import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        { productList.map((product) => (
          <div key={ product.id } data-testid="product">
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={ product.thumbnail } alt="imagem" />
          </div>))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  productList: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
