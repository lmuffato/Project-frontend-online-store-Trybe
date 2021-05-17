import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

class ShoppingCart extends Component {
  constructor(){
    super();

    this.state = {
      products: [],
      isLoading: false,
    }
  }
  
  // updateProducts = () => {
  //   const { product } = this.props.match.params;
  //   const parsedObject = JSON.parse(product)
  //   this.setState((prevState) => ({
  //     products: [...prevState.products, parsedObject]
  //   }))
  // }

  // componentDidMount = () => {
  //   this.updateProducts();
  // }

  reduce = (arr) => {
    const reduced = [];
    arr.forEach((element) => {
      if (!reduced.includes(element)) {
        reduced.push(element);
      }
    });
    return reduced;
  }

  render() {
    // const { product } = this.props.match.params;
    const { products, quantity } = this.props;
    const reducedProducts = this.reduce(products);
    

    // if (isLoading) {
    //   return (
    //     <p>Carregando...</p>
    //   );
    // }
    
    if (products !== []) {
      return (
        <>
        {reducedProducts.map((product) => (
          <div className="product-shopping-cart" key={product}>
            <p data-testid="shopping-cart-product-name">{product}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity[product]}</p>
          </div>
        ))}
        <Link to="/">VOLTAR</Link>
        </>
      );
    }

    return (
      <div>
        <span>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          
        </span>
      </div>
    );
  }
}

export default ShoppingCart;
