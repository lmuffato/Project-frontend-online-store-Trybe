import React from 'react';
import { shape, string, number, func } from 'prop-types';

// import CartProduct from '../Components/CartProduct';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { cart } } } = props;

    this.state = {
      cartProducts: cart,
    };
  }

  cartFiltered = () => {

  }

  render() {
    const { history: { goBack } } = this.props;
    const { cartProducts } = this.state;
    const isCartEmpty = cartProducts.length;
    const empty = <h4 data-testid="shopping-cart-empty-message">Carrinho vazio</h4>;
    console.log(isCartEmpty);
    const produtcs = (
      <>
        <header className="shopping-cart-header">
          <img
            className="shopping-cart"
            src="https://img2.gratispng.com/20180425/lcq/kisspng-computer-icons-shopping-cart-5ae061983e57a6.1325375415246544882554.jpg"
            alt="carrinho de compras"
          />
          <h3>Carrinho de compras</h3>
        </header>

        { cartProducts.map((prod) => (
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

        {/* {cart.map((prod) =>
          <li key={ prod.id } data-testid="shopping-cart-product-name">{prod.title}</li>)}
        */}
        {/* <CartProduct /> */}
      </>
    );
    return (
      <div className="shopping-cart-container">
        <button type="button" onClick={ goBack }>
          <img
            className="back"
            src="https://image.flaticon.com/icons/png/512/64/64516.png"
            alt="voltar"
          />
        </button>

        {
          !isCartEmpty ? empty : produtcs
        }

      </div>
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
  history: shape({
    goBack: func,
  }).isRequired,
};

export default ShoppingCart;
