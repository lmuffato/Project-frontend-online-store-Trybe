import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

class cardItem extends Component {
  render() {
    const { product, productToCart } = this.props;
    const { title, thumbnail, price, id } = product;

    return (
      <>
        <Link
          to={ {
            pathname: `/productDetails/${id}`,
            state: { thumbnail, title, price, id },
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="product">
            <img src={ thumbnail } alt="produto" />
            <h3>{title}</h3>
            <span>{`R$ ${price}`}</span>
            <br />
          </div>
        </Link>
{//<<<<<<< HEAD}
        /* <AddCart
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          { ...this.props }
          cart={ cart }
        />
// =======
        <AddCart id={ id } product={ { ...product } } productToCart={ productToCart } />
// >>>>>>> 6f643354f9559458934a0ad586772e874269d7c5*/
}
      </>
    );
  }
}

cardItem.propTypes = {
  title: string,
  image: string,
  price: number,
  id: string,
}.isRequired;

export default cardItem;
