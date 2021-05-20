import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './category_list';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ShopCartButton from './ShopCartButton';
import Button from './button';
import FreeShipping from './FreeShipping';

export default class ProductList extends Component {
  constructor() {
    super();

    this.loadProductsByText = this.loadProductsByText.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.filterObjs = this.filterObjs.bind(this);
    this.loadProductsByCategory = this.loadProductsByCategory.bind(this);

    this.state = {
      searchText: '',
      objText: [],
      objCategory: [],
      obj: [],
    };
  }

  async loadProductsByText({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async loadProductsByCategory({ target }) {
    let resultCategory = [];
    const ArrayCategory = [];
    const { name, value } = target;
    this.setState({ [name]: value });
    resultCategory = await getProductsFromCategoryAndQuery(value, 1);
    resultCategory.results.map((item) => {
      const newObjCategory = {
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        qtd: 1,
        shipping: item.shipping.free_shipping,
      };
      ArrayCategory.push(newObjCategory);
      return this.setState({
        obj: ArrayCategory,
        objCategory: ArrayCategory,
      });
    });
  }

  async submitSearch() {
    const { searchText } = this.state;
    this.setState({ obj: 'nenhum' });
    let resultText = [];
    const ArrayText = [];
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
          qtd: 1,
          shipping: item.shipping.free_shipping,
        };
        ArrayText.push(newObjText);
        return this.setState({
          objText: ArrayText,
        });
      });
    }
    this.filterObjs();
  }

  filterObjs() {
    const { objCategory, objText, searchText } = this.state;
    let filterObj = '';
    if (objCategory.length > 0 && objText.length > 0) {
      filterObj = objCategory
        .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
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
      <section data-testid="product" id="product" className="product" key={ item.id }>
        <Button obj={ item } dataTestId="product-add-to-cart" />
        <Link
          to={ `/product_details/${item.id}` }
          data-testid="product-detail-link"
        >
          <img src={ item.thumbnail } width="100px" alt="item.title" />
          {item.title}
          | PRICE:
          {item.price}
        </Link>
        <FreeShipping shippingFree={ item.shipping } />
      </section>
    ));
  }

  render() {
    const { obj, searchText } = this.state;
    return (
      <div className="content">
        <label htmlFor="catSearchID" data-testid="home-initial-message">
          <header>
            <div className="seachByText">
              <input
                data-testid="query-input"
                type="text"
                name="searchText"
                value={ searchText }
                id="catSearchID"
                className="catSearchID"
                onChange={ this.loadProductsByText }
                placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
              />
              <button
                type="submit"
                data-testid="query-button"
                onClick={ this.submitSearch }
              >
                Pesquisar
              </button>
            </div>
            <span
              className="textOfSeach"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
            <ShopCartButton />
          </header>
          <div className="downContent">
            <Category handleFunction={ this.loadProductsByCategory } />
            <div>
              <section className="listProductBySeachAndFilter">
                { obj.length > 0 ? this.loadProducts(obj) : ''}
              </section>
            </div>
          </div>
        </label>
      </div>
    );
  }
}
