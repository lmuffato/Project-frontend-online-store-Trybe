import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchProducts.css';

class SearchProducts extends Component {
  addProductInCart = ({ target }) => {
    const { handle, productsList } = this.props;
    const id = target.value;
    const product = productsList.find((item) => item.id === id);
    const quantityElment = target.parentElement.querySelector('.quantity');
    const productQuantity = parseInt(quantityElment.value, 10);
    handle(product, productQuantity);
  }

  productsCards = (list) => {
    const { query, handle /* , productsInCart */ } = this.props;
    const message = query === '' ? '' : 'Nenhum produto foi encontrado';
    return (
      <section className="search-conteiner">
        {
          list.length === 0
            ? <h1 data-testid="product">{ message }</h1>
            : list.map((product) => {
              const { price, thumbnail, title, id } = product;
              return (
                <section className="product-conteiner" data-testid="product" key={ id }>
                  <h3 className="title-product" value={ title }>{ title }</h3>
                  <img
                    className="image-product"
                    src={ thumbnail }
                    alt={ `Imagem-${title}` }
                  />
                  <p className="price-product">{ `R$ ${price.toFixed(2)}` }</p>
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                    onClick={ this.addProductInCart }
                    value={ id }
                  >
                    Adicionar ao Carrinho
                  </button>
                  <label htmlFor="quantity">
                    Quantidade:
                    <input
                      className="quantity"
                      name="quantity"
                      type="number"
                      defaultValue={ 1 }
                    />
                  </label>
                  <Link
                    data-testid="product-detail-link"
                    to={ {
                      pathname: '/item-details',
                      state: {
                        product,
                        // productsInCartQuantity: Object.keys(productsInCart).length,
                      },
                      handle,
                    } }
                  >
                    Detalhes
                  </Link>
                </section>
              );
            })
        }
      </section>
    );
  };

  render() {
    const { productsList } = this.props;
    return (
      <section>
        {this.productsCards(productsList)}
      </section>
    );
  }
}

SearchProducts.propTypes = {
  handle: PropTypes.func.isRequired,
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchProducts;
