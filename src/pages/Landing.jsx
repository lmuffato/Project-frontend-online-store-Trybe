import React, { Component } from "react";
import InitialMessage from "../components/InitialMessage";
import SearchBar from "../components/SearchBar";
import IconCart from "../components/IconCart";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import * as API from "../services/api";
import Button from "../components/Button";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      selectedCategory: "",
      searchInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { selectedCategory, searchInput } = this.state;
    if (prevState.selectedCategory !== selectedCategory) {
      return this.fetchProducts();
    }
    if (prevState.searchInput !== searchInput ) {
      return this.fetchProducts();
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async fetchProducts(event) {
    // event.preventDefault();
    const { searchInput, selectedCategory } = this.state;
    const response = await API
      .getProductsFromCategoryAndQuery(selectedCategory, searchInput);
    console.log(response.results);
    this.setState({ products: response.results });
    //  return response.results;
  }

  filterButton() {
    const { searchInput, products } = this.state;
    products.filter((product) => product.title.includes(searchInput));
  }

  render() {
    const { products } = this.state;
    console.log('render');
    return (
      <div>
        <IconCart />
        <SearchBar onChange={ this.handleChange } />
        <Button onClick={ this.fetchProducts } />
        <InitialMessage />
        <aside>
          <Categories onChange={ this.handleChange } />
        </aside>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
            />
          ))
        ) : (
          <p>Nenhum objeto encontrado</p>
        )}
      </div>
    );
  }
}
