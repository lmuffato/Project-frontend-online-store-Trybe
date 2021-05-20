import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import SideBarCategory from '../components/SideBarCategory';
import ProductList from '../components/ProductList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './styles/home.css';
import CartButton from '../components/CartButton';

class home extends Component {
  constructor() {
    super();
    this.state = {
      query: 'QUERY',
      category: 'CATEGORY_ID',
      data: [],
      wasRequested: false,
      addProduct: [],
    };
  }

  componentDidMount() {
    this.renderProductList();
  }

  getProductAtributes = (event) => {
    const { addProduct } = this.state;
    const element = Object.values(event.target).pop();
    const elementSKU = element.SKU;
    if (addProduct.every((el) => el.id !== elementSKU) || addProduct.length === 0) {
      addProduct.push({
        q: 1,
        id: elementSKU,
      });
      this.setState({ addProduct });
    } else {
      const filteredProduct = addProduct.filter((el) => el.id === elementSKU).shift();
      const index = addProduct.indexOf(filteredProduct);
      filteredProduct.q += 1;
      addProduct[index] = filteredProduct;
      this.setState({ addProduct });
    }
  };

  getCategory = (e) => {
    e.preventDefault();
    const nodeInfo = [...Object.values(e.target.parentNode)].shift();
    this.setState({ category: nodeInfo.key });
  }

  getQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  getProducts = async (e) => {
    e.preventDefault(e);
    const { query, category } = this.state;
    const apiData = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      data: apiData,
      wasRequested: true,
    });
  }

  renderProductList = async () => {
    const { query, category } = this.state;
    const apiData = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      data: apiData,
      wasRequested: true,
    });
  }

  render() {
    const { wasRequested, data, addProduct } = this.state;
    return (
      <main>
        <div className="home">
          <SearchBar getQuery={ this.getQuery } getProducts={ this.getProducts } />
          <CartButton data={ data } newCartItemId={ addProduct } />
        </div>
        <div className="sidebar-and-list">
          <SideBarCategory
            categories={ getCategories() }
            getCategory={ this.getCategory }
          />
          { wasRequested ? <ProductList
            data={ data }
            getId={ this.getProductAtributes }
          /> : console.log('waiting api') }
        </div>
      </main>
    );
  }
}

home.propTypes = {
  getProducts: PropTypes.func.isRequired,
}.isRequired;

export default home;
