import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingForm from '../components/RatingForm';

class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;
    const { cartItemMethod } = this.props;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{state.title}</h3>
          <h4>
            Price R$
            { state.price }
          </h4>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => (
              cartItemMethod(state)) }
          >
            Add To Cart
          </button>
          <Link data-testid="shopping-cart-button" to="/cart">Go To Cart</Link>
          <img src={ state.thumbnail } alt="Imagem do Produto" />
        </div>
        <div>
          <h4>Especificações técnicas</h4>
          { state.attributes.map((el) => (
            <p key={ el.id }>
              {`${el.name}: ${el.value_name}`}
            </p>
          )) }
        </div>
        <RatingForm />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  state: PropTypes.object,
}.isRequired;

export default ProductDetail;
