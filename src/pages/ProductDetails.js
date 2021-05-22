import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import ProductEvaluationForm from '../components/comment/ProductEvaluationForm';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    const {
      location: { state: { product } },
      cartItems,
    } = this.props;

    this.product = product;

    this.state = {
      amount: cartItems[product.id]?.amount || 0,
    };
  }

  handleClick = () => {
    const { addToCart } = this.props;
    const { title, price, id, thumbnail } = this.product;

    this.setState((prevState) => ({
      amount: prevState.amount + 1,
    }), () => {
      const { amount } = this.state;
      addToCart(id, {
        title,
        price,
        amount,
        id,
        thumbnail,
        totalPrice: amount * price,
      });
    });
  };

  render() {
    const { location: { state: { product } }, totalCount, freeShipping } = this.props;

    return (
      <section>
        <div>
          <Link to="/">Voltar</Link>
          <ButtonCart totalCount={ totalCount } />
        </div>
        <div>
          <h2 data-testid="product-detail-name">{ product.title }</h2>
          { freeShipping(product) }
          <img src={ product.thumbnail } alt="Imagem do produto" />
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          ADD
        </button>
        <ProductEvaluationForm />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
  shipping: PropTypes.object,
}.isRequired;
