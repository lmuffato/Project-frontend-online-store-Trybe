import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import SideBarCategory from '../components/SideBarCategory';
import ProductList from '../components/ProductList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './styles/home.css';

class home extends Component {
  constructor() {
    super();
    this.state = {
      query: 'QUERY',
      category: 'CATEGORY_ID',
      data: [],
      wasRequested: false,
    };
  }

  getQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  getCategory = (e) => {
    e.preventDefault();
    const nodeInfo = [...Object.values(e.target.parentNode)].shift();
    this.setState({ category: nodeInfo.key });
  }

  getProducts = async (e) => {
    e.preventDefault(e);
    const { query, category } = this.state;
    const apiData = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      data: apiData,
      wasRequested: true,
    });
    console.log(apiData);
  }

  renderProductList = () => {
    const { data } = this.state;
    return <ProductList data={ data } />;
  };

  render() {
    const { wasRequested, data } = this.state;
    return (
      <main>
        <div className="home">
          <SearchBar getQuery={ this.getQuery } getProducts={ this.getProducts } />
        </div>
        <div className="sidebar-and-list">
          <SideBarCategory
            categories={ getCategories() }
            getCategory={ this.getCategory }
          />
          { wasRequested ? <ProductList data={ data } /> : console.log('waiting') }
        </div>
      </main>
    );
  }
}

home.propTypes = {
  getProducts: PropTypes.func.isRequired,
}.isRequired;

export default home;
