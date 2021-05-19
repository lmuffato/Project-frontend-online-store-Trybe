import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { state } = location;
    const { products, productsQuantity, addedProduct, quantityAdded } = state;
    this.state = {
      productsOnCart: products || [],
      quantity: productsQuantity,
      addedProduct,
      quantityAdded
    };
  }

  componentDidMount = () => {
    
    const { addedProduct, quantityAdded, productsOnCart } = this.state;
    console.log(productsOnCart);
    if (addedProduct) {
      const { title, id, price } = addedProduct;
      this.setState((prevState) => ({
        productsOnCart: [...prevState.productsOnCart, {
          title,
          id,
          price
        }],
        productsQuantity: {...prevState.productsQuantity, 
          [title]: quantityAdded
        }
      }))
    }
  }

  handleDecrease = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => ({
      quantity: { ...prevState.quantity,
        [value]: prevState.quantity[value] - 1 },
    }));
  }

  handleIncrease = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => ({
      quantity: { ...prevState.quantity,
        [value]: prevState.quantity[value] + 1 },
    }));
  }

  handleDelete = ({ target }) => {
    const { value } = target;
    const { productsOnCart, quantity } = this.state;
    delete quantity[value];
    const filteredProducts = productsOnCart.filter(({ title }) => title !== value);

    this.setState({
      productsOnCart: [...filteredProducts],
    });
  }

  reduce = (arr) => {
    const reduced = [];
    const newArray = [];
    const { addedProduct } = this.state;
    
    if(arr) {
      arr.forEach((element) => {
        if (!reduced.includes(element.title)) {
          reduced.push(element.title);
          newArray.push(element);
        }
      });
      return newArray;
    }
    newArray.push(addedProduct)
    return newArray;
  }

  render() {
    const { productsOnCart, quantity, addedProduct } = this.state;
    const reducedProducts = this.reduce(productsOnCart);

    if (reducedProducts.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    if(reducedProducts.length === 1) {
      let idProd, titleProd, quantityProd;
      const { addedProduct, quantityAdded, quantity } = this.state;
      idProd = productsOnCart[0].id;
      titleProd = productsOnCart[0].title;
      if (typeof(quantity) !== 'undefined') {
        quantityProd = quantity[titleProd];
      }
      if (addedProduct) {
        const {id, title} = addedProduct;
        idProd = id;
        titleProd = title;
        quantityProd = quantityAdded;
      }
      return(
        <>
          <div className="product-shopping-cart" key={ idProd }>
            <p data-testid="shopping-cart-product-name">{titleProd}</p>
            <section
              className="product-quantity-manipulation"
              style={ { display: 'flex', flexDirection: 'row' } }
            >
              <button
                type="button"
                value={ titleProd }
                onClick={ this.handleDecrease }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantityProd}</p>
              <button
                type="button"
                value={ titleProd }
                onClick={ this.handleIncrease }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ titleProd }
                onClick={ this.handleDelete }
                data-testid="product-delete"
              >
                Deletar
              </button>
            </section>
          </div>
          <Link to="/">VOLTAR</Link>
          <Link
            data-testid="checkout-products"
            to={ {
              pathname: '/checkout',
              search: '',
              hash: '',
              state: { products: reducedProducts, quantity },
            } }
          >
            Finalizar compra
          </Link>
        </>
      )
    }

    return (
      <>
        {reducedProducts.map(({ title, id }) => (
          <div className="product-shopping-cart" key={ id }>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <section
              className="product-quantity-manipulation"
              style={ { display: 'flex', flexDirection: 'row' } }
            >
              <button
                type="button"
                value={ title }
                onClick={ this.handleDecrease }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantity[title]}</p>
              <button
                type="button"
                value={ title }
                onClick={ this.handleIncrease }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                value={ title }
                onClick={ this.handleDelete }
                data-testid="product-delete"
              >
                Deletar
              </button>
            </section>
          </div>
        ))}
        <Link to="/">VOLTAR</Link>
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/checkout',
            search: '',
            hash: '',
            state: { products: reducedProducts, quantity },
          } }
        >
          Finalizar compra
        </Link>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  productsOnCart: PropTypes.arrayOf(PropTypes.objectOf({
    title: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
