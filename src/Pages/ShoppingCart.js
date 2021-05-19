import React from 'react';
import { shape, string, number } from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state: { cart } }, location } = this.props;
    console.log(location);
    if (cart.length === 0) {
      const empty = <h4 data-testid="shopping-cart-empty-message">Carrinho vazio</h4>;
      return empty;
    }
    return (
      <ul>
{/*<<<<<<< HEAD
        { cart.map((prod) => (
          <li
            className="detailsContainer"
            key={ prod[0] }
            data-testid="product-add-to-cart"
          >
            <img src={ prod[1] } alt="imagem" className="imageProduct" />
            <div data-testid="shopping-cart-product-name">{ prod[2] }</div>
            <div>{ `R$ ${prod[3]}` }</div>
            <div data-testid="shopping-cart-product-quantity"> Qtd </div>
            <br />
            <br />
          </li>)) }
=======
        {cart.map((prod) => <li key={ prod.id } data-testid="shopping-cart-product-name">{prod.title}</li>)}
>>>>>>> 6f643354f9559458934a0ad586772e874269d7c5*/
}      </ul>
    );
  }
}

ShoppingCart.propTypes = {
  location: shape({
    state: shape({
      title: string,
      price: number,
      thumbnail: string,
    }),
  }).isRequired,
};

export default ShoppingCart;
