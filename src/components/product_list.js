import React, { Component } from 'react';
import Category from './category_list';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ShopCartButton from './ShopCartButton';

export default class ProductList extends Component {
  constructor() {
    super();

    this.loadProductsByText = this.loadProductsByText.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.filterObjs = this.filterObjs.bind(this);

    this.state = {
      searchText: '',
      checkFilter: '',
      objText: [],
      objCategory: [],
      obj: [],
    };
  }

  async loadProductsByText({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async submitSearch() {
    const { searchText, checkFilter } = this.state;
    this.setState({ obj: 'nenhum' });
    let resultCategory = [];
    let resultText = [];
    const ArrayText = [];
    const ArrayCategory = [];
    if (checkFilter !== '') {
      resultCategory = await getProductsFromCategoryAndQuery(checkFilter, 1);
    }
    if (searchText !== '') {
      resultText = await getProductsFromCategoryAndQuery(1, searchText);
    }
    if (resultText.results) {
      resultText.results.map((item) => {
        const newObjText = {
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
        };
        console.log(newObjText);
        ArrayText.push(newObjText);
        return this.setState({
          objText: ArrayText,
        });
      });
    }
    console.log(resultCategory)
    if (resultCategory.results) {
      resultCategory.results.map((item) => {
        const newObjCategory = {
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
        };
        console.log(newObjCategory);
        ArrayCategory.push(newObjCategory);
        return this.setState({
          objCategory: ArrayCategory,
        });
      });
    }
    this.filterObjs();
  }

  filterObjs() {
    const { objCategory, objText, searchText } = this.state;
    console.log(`objCategory${objCategory}`);
    console.log(`objText${objText}`);
    console.log(`searchText${searchText}`);
    let filterObj = '';
    if (objCategory.length > 0 && objText.length > 0) {
      filterObj = objCategory.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
    } else if (objCategory.length > 0) {
      filterObj = objCategory;
    } else {
      filterObj = objText;
    }
    this.setState({
      obj: filterObj,
    });
  }

  loadProducts(obj) {
    if (obj === 'nenhum' || obj === '') {
      return 'Nenhum produto foi encontrado.';
    }
    return obj.map((item) => (
      <section data-testid="product" key={ item.id }>
        <img src={ item.thumbnail } width="100px" alt="item.title" />
        {item.title}
        | PRICE:
        {item.price}
      </section>
    ));
  }

  render() {
    const { obj, searchText } = this.state;
    return (
      <div>
        <Category handleFunction={ this.loadProductsByText } />
        <label htmlFor="catSearchID" data-testid="home-initial-message">
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            value={ searchText }
            id="catSearchID"
            onChange={ this.loadProductsByText }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.submitSearch }
          >
            Pesquisar
          </button>
          <div>
            <section>
              { obj.length > 0 ? this.loadProducts(obj) : ''}
            </section>
          </div>
        </label>
        <ShopCartButton />
      </div>
    );
  }
}
