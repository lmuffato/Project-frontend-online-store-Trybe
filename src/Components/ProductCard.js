import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="products-cards">
        { productList.map((product) => (
          <div key={ product.id } data-testid="product">
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img style={ { width: '100px' } } src={ product.thumbnail } alt="imagem" />
          </div>))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default ProductCard;
