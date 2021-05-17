// implement AddMovie component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './ShoppinCart/cartIcon.png';

class ProductList extends Component {
  render() {
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            placeholder="Pesquisar produto..."
            data-testid="text-input"
            type="text"
            name="searchProduct"
            // value={ searchText }
            // onChange={ }
          />
        </label>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Link
          to="/ShoppingCart"
        >
          <img
            alt="shopping-cart"
            data-testid="shopping-cart-button"
            className="shopping-cart-img"
            src={ cartIcon }
          />
        </Link>
      </div>
    );
  }
}

export default ProductList;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import PropTypes from 'prop-types';

// import cartIcon from '../Images/cartIcon.png';

// class CartButton extends Component {
//   render() {
//     // const { cart } = this.props;
//     return (
//       <section className="cart-button-container">
//         <Link
//           to="/shopping-cart"
//           data-testid="shopping-cart-button"
//         >
//           <img
//             alt="shopping-cart"
//             className="shopping-cart-img"
//             src={ cartIcon }
//           />
//         </Link>
//         <div
//           data-testid="shopping-cart-size"
//           className="cart-count"
//         >
//           {/* {cart} */}
//         </div>
//       </section>
//     );
//   }
// }

// // CartButton.propTypes = {
// //   cart: PropTypes.number.isRequired,
// // };

// export default CartButton;

