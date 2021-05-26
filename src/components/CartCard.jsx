import React from 'react';
import PropTypes from 'prop-types';
import { addToLocalStorage } from '../services/localStorage';
import '../styles/CartCard.css';

export default class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyQuantity: 1,
      price: 0,
    };
  }

  quantityProduct = ({ target }) => {
    const { product } = this.props;
    if (target.name === 'add' && product.buyQuantity < product.availableQuantity) {
      console.log('Me adicionaram aqui ó');
      product.buyQuantity += 1;
      product.price = product.standardPrice * parseInt(product.buyQuantity, 10);
      this.setState({
        buyQuantity: product.buyQuantity,
        price: product.price,
      });
      return addToLocalStorage(product);
    }
    if (target.name === 'sub' && product.buyQuantity > 1) {
      product.buyQuantity -= 1;
      product.price = product.standardPrice * parseInt(product.buyQuantity, 10);
      this.setState({
        buyQuantity: product.buyQuantity,
        price: product.price,
      });
      return addToLocalStorage(product);
    }
  };

  render() {
    const { product, deleteProduct } = this.props;
    const { buyQuantity, price } = this.state;
    return (
      <div key={ product.title } className="shopping-cart-product">
        <p
          data-testid="shopping-cart-product-name"
          className="shopping-cart-product-name"
        >
          {product.title}
        </p>
        <img src={ product.thumbnail } alt={ product.thumbnailId } width="100px" />
        <p>
          Preço unitário:
          { ` ${product.standardPrice}` }
        </p>
        <p>
          Subtotal
          { buyQuantity > 1
            ? ` (${buyQuantity} itens)`
            : ` (${1} item)` }
          : R$
          {price === 0 ? product.standardPrice : price.toFixed(2) }
        </p>
        <label htmlFor={ product.title } className="quantity-label">
          { 'Quantidade: ' }

          <button
            type="button"
            name="sub"
            className="sub"
            data-testid="product-decrease-quantity"
            onClick={ (event) => this.quantityProduct(event) }
          >
            -
          </button>
          <p
            id={ product.title }
            className="quantity"
            data-testid="shopping-cart-product-quantity"
          >
            { product.buyQuantity }
          </p>
          <button
            type="button"
            name="add"
            className="add"
            data-testid="product-increase-quantity"
            onClick={ (event) => this.quantityProduct(event) }
          >
            +
          </button>
          <button
            type="button"
            name="delete"
            className="delete"
            onClick={ () => deleteProduct(product.title) }
          >
            x
          </button>
        </label>
      </div>
    );
  }
}

CartCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    thumbnailId: PropTypes.string,
    buyQuantity: PropTypes.number,
    price: PropTypes.number,
    standardPrice: PropTypes.number,
  }),
}.isRequired;
