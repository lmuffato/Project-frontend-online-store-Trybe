import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as api from '../services/api';
import Products from '../components/Products';
import Loading from '../components/Loading';
import CartButton from '../components/CartButton';

class Index extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      loading: false,
      categories: [],
      categoryId: '',
      searchText: '',
      shoppingCart: [],
      products: undefined, // inicia como undefined pra facilitar a condição do ternário em Products.jsx
    };
  }

  handleSearchInput({ target }) {
    const searchText = target.value;
    this.setState({ searchText });
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async fetchProducts() {
    this.setState({ loading: true, products: null });
    const { searchText, categoryId } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(
      searchText,
      categoryId,
    );
    this.setState({ products, loading: false });
  }

  selectCategory(id) {
    this.setState({ categoryId: id }, async () => {
      await this.fetchProducts();
    });
  }

  addToCart(product) {
    // https://pt.stackoverflow.com/questions/315806/alterar-atributo-de-um-array-de-objetos-no-estado-na-aplica%25C3%25A7%25C3%25A3o
    const { shoppingCart } = this.state;
    const addQuantity = shoppingCart
      .find((productShoppingCart) => product.id === productShoppingCart.id);
    if (addQuantity) {
      const index = shoppingCart.indexOf(addQuantity);
      shoppingCart[index].quantity += 1;
      this.setState({ shoppingCart });
    } else {
      this.setState({
        shoppingCart: [...shoppingCart, product],
      });
    }
  }

  render() {
    const { categories, searchText, products, loading, shoppingCart } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onChange={ this.handleSearchInput }
          onClick={ this.fetchProducts }
        />
        <CartButton shoppingCart={ shoppingCart } />
        <Categories
          onClick={ this.selectCategory }
          categories={ categories }
          getData={ this.fetchCategories }
        />
        { loading && <Loading /> }
        { products && <Products products={ products } addToCart={ this.addToCart } /> }
      </main>
    );
  }
}

export default Index;
