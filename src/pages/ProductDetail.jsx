import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{state.title}</h3>
          <h4>
            Price R$
            { state.price }
          </h4>
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
      </div>
    );
  }
}

ProductDetail.propTypes = {
  state: PropTypes.object,
}.isRequired;

export default ProductDetail;
