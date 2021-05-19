import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      increaseButtonDisabled: false,
    };

    this.loadResult = this.loadResult.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  componentDidMount() {
    this.loadResult();
  }

  onRemove(event) {
    const { removeFromCart, cart } = this.props;
    let { total } = this.state;
    const { id } = event.target;
    const foundProduct = cart.find((product) => product.data.id === id);
    let { price } = foundProduct.data;

    price *= foundProduct.quantity;

    total -= price;

    this.setState({
      total,
    });

    removeFromCart(id);
  }

  decreaseQuantity(event) {
    const { id } = event.target;
    let { total } = this.state;
    const { cart, removeFromCart, setCart } = this.props;
    const foundProduct = cart.find((product) => product.data.id === id);
    const { price } = foundProduct.data;

    if (foundProduct.quantity <= foundProduct.data.available_quantity) {
      this.setState({
        increaseButtonDisabled: false,
      });
    }

    const updatedCart = cart.map((product) => {
      if (product.data.id === id) {
        product.quantity -= 1;
      }

      return product;
    });

    setCart(updatedCart);

    if (foundProduct.quantity < 1) removeFromCart(id);

    total -= price;

    this.setState({
      total,
    });
  }

  increaseQuantity(event) {
    const { id } = event.target;
    let { total } = this.state;
    const { setCart, cart } = this.props;

    const foundProduct = cart.find((product) => product.data.id === id);
    const { price } = foundProduct.data;
    total += price;

    if (foundProduct.quantity === foundProduct.data.available_quantity - 1) {
      this.setState({
        increaseButtonDisabled: true,
      });
    }

    const updatedCart = cart.map((product) => {
      if (product.data.id === id) {
        product.quantity += 1;
      }
      if (product.quantity > product.data.available_quantity) {
        product.quantity -= 1;
      }
      return product;
    });

    setCart(updatedCart);

    this.setState({
      total,
    });
  }

  loadResult() {
    const { cart } = this.props;
    const { total: totalState } = this.state;
    let total = totalState;

    cart.forEach((product) => {
      const productPrice = product.data.price * product.quantity;
      total += productPrice;
      return total;
    });

    this.setState({
      total,
    });
  }

  render() {
    const { total, increaseButtonDisabled } = this.state;
    const { cart } = this.props;
    const cartIsEmpty = cart.length < 1;
    return (
      <>
        <header>
          <Link to="/">Voltar</Link>
        </header>
        <h1>Carrinho de Compras</h1>
        { cartIsEmpty ? (
          <strong data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </strong>
        ) : (
          <>
            {cart.map((product) => (
              <div key={ product.data.id }>
                <button type="button" id={ product.data.id } onClick={ this.onRemove }>
                  Remover
                </button>
                <img src={ product.data.thumbnail } alt={ product.data.title } />
                <strong data-testid="shopping-cart-product-name">
                  {product.data.title}
                </strong>
                <button
                  type="button"
                  id={ product.data.id }
                  onClick={ this.decreaseQuantity }
                  data-testid="product-decrease-quantity"
                >
                  -
                </button>
                <strong data-testid="shopping-cart-product-quantity">
                  {product.quantity}
                </strong>
                <button
                  type="button"
                  id={ product.data.id }
                  onClick={ this.increaseQuantity }
                  data-testid="product-increase-quantity"
                  disabled={ increaseButtonDisabled }
                >
                  +
                </button>
                <span>{`R$${product.data.price}`}</span>
              </div>
            ))}
            <strong>Valor total da compra:</strong>
            <span>{`R$${total}`}</span>
            <Link
              to={ {
                pathname: '/cart/checkout',
                state: { total },
              } }
            >
              <button type="button" data-testid="checkout-products">
                Finalizar Compra
              </button>
            </Link>
          </>
        )}
      </>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default ShoppingCart;
