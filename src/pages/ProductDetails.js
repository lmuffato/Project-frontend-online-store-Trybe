import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import ProductEvaluationForm from '../components/comment/ProductEvaluationForm';

export default class ProductDetails extends Component {
  FreeShipping = () => {
    const { location: { state: { product } } } = this.props;
    const { shipping } = product;
    const FreeShipping = shipping.free_shipping;
    console.log(FreeShipping);
    if (FreeShipping) return (<div data-testid="free-shipping"> Frete Grátis</div>);
  }

  render() {
    const { location: { state: { product } } } = this.props;
    console.log(product);

    return (
      <section>
        <div>
          <Link to="/">Voltar</Link>
          <ButtonCart />
        </div>
        <div>
          <h2 data-testid="product-detail-name">{ product.title }</h2>
          { this.FreeShipping() }
          <img src={ product.thumbnail } alt="Imagem do produto" />
        </div>
        <ProductEvaluationForm />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
  shipping: PropTypes.object,
}.isRequired;
