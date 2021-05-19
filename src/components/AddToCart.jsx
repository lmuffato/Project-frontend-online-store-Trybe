// import React, { Component } from 'react';
// import * as shoppingCartService from '../services/shoppingCartService';

// export default class AddToCart extends Component {
//   constructor() {
//     super();

//     this.onClick = this.onClick.bind(this);
//   }

//   // addProductToCart(product) {
//   //   const { cart, totalPayment } = this.state;
//   //   const { price } = product;
//   //   this.setState({
//   //     cart: [...cart, product],
//   //     totalPayment: totalPayment + price,
//   //   }, () => shoppingCartService.setProducts());
//   // }

//   onClick() {
//     const { product } = this.props;
//     // console.log(product);
//     shoppingCartService.setProducts(product);
//   }

//   render() {
//     const { product } = this.props;

//     return (
//       <button
//         type="button"
//         data-props={ product }
//         onClick={ this.onClick }
//       >
//         Adicionar ao carrinho
//       </button>
//     );
//   }
// }
