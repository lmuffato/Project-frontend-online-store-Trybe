import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends Component {
  render() {
    const { item: { title, price, thumbnail, id } } = this.props;
    /* const { match: { params: { id: productId } } } = this.props; */
/*     console.log(this.props.match); */
    return (
      <div>
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>
          <div data-testid="product" key={ id }>
            <h2>{ title }</h2>
            <span>{ price }</span>
            <img src={ thumbnail } alt="alt" />
          </div>
        </Link>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default CardItem;
