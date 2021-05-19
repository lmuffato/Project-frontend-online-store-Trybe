import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import serviceCart from '../services/serviceCart';

class ProductDetails extends Component {
  getProductAtributes = () => {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, thumbnail_id: imagePath } = product;

    const productData = {
      title,
      imagePath,
      quantity: 1,
      price,
    };
    const { cartItemList } = serviceCart;
    cartItemList.push(productData);
  };

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, available_quantity: avq, attributes } = product;

    const realPrice = `${(new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL' })
      .format(price))}`;
    return (
      <div>
        <Link to="../Cart">
          <FaShoppingCart
            className="cart"
            color="#3BC18C"
            size="1.5rem"
            data-testid="shopping-cart-button"
          />
        </Link>
        <div className="productDetails">
          <img src={ `https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-O.webp` } alt={ title } />
          <h4 data-testid="product-detail-name">{ title }</h4>
          <h4>{ `quantidade disponivel: ${avq}` }</h4>
          <h4>{ realPrice }</h4>
          <ul>
            { attributes.map((attribute) => (
              <li key={ attribute.id }>
                { `${attribute.name}: ${attribute.value_name}` }
              </li>
            )) }
          </ul>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            className="addToCard"
            onClick={ this.getProductAtributes }
            // product={ product }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  id: string,
}.isRequired;
export default ProductDetails;
