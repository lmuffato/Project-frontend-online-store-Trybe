import React, { Component } from 'react';
import * as api from '../services/api';
import './SearchProducts.css';

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      productsList: [],
    };
  }

  componentWillReceiveProps() {
    this.search();
  }

  handle = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  addProductInCart = ({ target }) => {
    const { handle } = this.props;
    console.log(target.value);
    const ProductId = target.value;
    const productQuantity = target.parentElement.querySelector('.quantity').value;
    const title = target.parentElement.querySelector('.title-product').innerText;
    handle(title, ProductId, productQuantity);
  }

  search = async () => {
    const { query } = this.state;
    const { getProductsFromCategoryAndQuery } = api;
    const { category } = this.props;
    const request = await getProductsFromCategoryAndQuery(category, query);
    let productsList = [];
    if (request !== []) {
      const { results } = request;
      productsList = results;
    }
    // console.log(productsList);
    this.setState({ productsList });
  };

  productsCards = (list) => {
    const { query } = this.state;
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
                  <h3 className="title-product">{ title }</h3>
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
                  <label>
                    Quantidade:
                    <input
                      className="quantity"
                      name="idade"
                      type="number"
                      defaultValue={ 1 }
                    />
                  </label>
                </section>
              );
            })
        }
      </section>
    );
  };

  render() {
    const { query, productsList } = this.state;
    return (
      <section>
        <input
          data-testid="query-input"
          value={ query }
          onChange={ this.handle }
          type="text"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.search }
        >
          xablau
        </button>
        {this.productsCards(productsList)}
      </section>
    );
  }
}

export default SearchProducts;
