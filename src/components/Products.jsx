import React, { Component } from 'react';
import { array } from 'prop-types';
import ProductCard from './ProductCard';

class Products extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <div className="product-list">
          { products.length === 0
            ? (<p>Nenhum produto foi encontrado</p>)
            : products.map((product) => (
              <ProductCard
                product={ product }
                id={ product.id }
                key={ product.id }
                title={ product.title }
                price={ product.price }
                imagePath={ product.thumbnail_id }
                // onClick={ addCart }
              />
            ))}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  products: array,
}.isRequired;

export default Products;
