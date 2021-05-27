import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

class Cart extends React.Component {
  /**
   * @param {{cartProduct: [{"title":"Compressor De Ar Mini Bateria ","price":79,"thumbnail":"http://http2.mlstatic.com/D_021-I.jpg","id":"MLB1832642322"}...{}]}} props
  */
  constructor(props) {
    super(props);

    const { cartProduct } = this.props;

    this.state = { cartProduct };
    cartProduct.forEach((ele) => { ele.quantProduct = 1; });
  }

  handleChange = (e, itemId) => {
    const { cartProduct } = this.state;
    const pedido = cartProduct.filter((ele) => ele.id === itemId);
    const result = pedido[0].quantProduct;

    if (e.target.name === 'productIncreaseQuantity') {
      console.log('Incremento', result);

      this.setState((state, props) => {
        const pedidoState = state.cartProduct.filter((ele) => ele.id === itemId);
        const pedidoProps = props.cartProduct.filter((ele) => ele.id === itemId);
        pedidoState[0].quantProduct = pedidoProps[0].quantProduct + 1;
        return state;
      });
    }

    if (e.target.name === 'productDecreaseQuantity') {
      console.log('Decremento', result);

      this.setState((state, props) => {
        const pedidoState = state.cartProduct.filter((ele) => ele.id === itemId);
        const pedidoProps = props.cartProduct.filter((ele) => ele.id === itemId);
        pedidoState[0].quantProduct = pedidoProps[0].quantProduct - 1;
        return state;
        // cartProduct: [{
        //   ...state.cartProduct[0],
        //   quantProduct: result - 1,
        // }],
      });
    }
  };

  render() {
    const { cartProduct } = this.state;
    const cartItems = (
      <section>
        {cartProduct.map(({ id, price, thumbnail, title, quantProduct }, index) => (
          <div key={ index }>
            <h1 data-testid="shopping-cart-product-name">{title}</h1>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
            <p>
              Quantidade:&nbsp;
              <strong data-testid="shopping-cart-product-quantity">
                { quantProduct }
              </strong>
            </p>
            <button
              key={ index }
              type="button"
              data-testid="product-increase-quantity"
              name="productIncreaseQuantity"
              onClick={ (e) => this.handleChange(e, id) }
            >
              Aumentar Quantidade
            </button>
            <button
              key={ index + 1 }
              type="button"
              data-testid="product-decrease-quantity"
              name="productDecreaseQuantity"
              onClick={ (e) => this.handleChange(e, id) }
            >
              Diminuir Quantidade
            </button>
          </div>))}
      </section>
    );
    const noItems = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
    return (
      <div>
        { cartProduct.length === 0 ? noItems : cartItems}
        <Link to="/checkout" data-testid="checkout-products">
          <Button>
            Ir para o carrinho
          </Button>
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  cartProduct: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Cart;
