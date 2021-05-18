import React, { Component } from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
// import UserForm from '../components/UserReview';
import ProductNotFound from '../components/ProductNotFound';
import * as api from '../services/api';
import UserForm from '../components/UserForm';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      categories: [],
      search: '',
      message: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFetchProducts = this.handleFetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFetchCategories = this.handleFetchCategories.bind(this);
    this.handleCategoryEvent = this.handleCategoryEvent.bind(this);
  }

  // Requisito 4 - Exibe as categorias buscadas pela função handleFetchCategories

  componentDidMount() {
    this.handleFetchCategories();
  }

  // Requisito 5 - captura/controla o value digitado no input

  handleChange({ target }) {
    this.setState({
      search: target.value,
    });
  }

  // Requisito 5 - função que dispara a chamada à API, após clique
  // no botão Pesquisar de SearchBar

  handleClick(event) {
    event.preventDefault();
    this.handleFetchProducts();
  }

  // Requisito 5 - Função que faz o fetch dos produtos por busca no input

  async handleFetchProducts() {
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', search);
    if (result.results.length === 0) {
      this.setState({ productsList: [], message: true, search: '' });
    } else {
      this.setState({ productsList: result.results, search: '', message: false });
    }
  }

  // Requisito 6 - Função que faz pega o id uma categoria e atribui à função
  // que faz o fetch de produtos por categoria

  handleCategoryEvent(event) {
    const id = event.target.getAttribute('id');
    this.handleFetchFromCategory(id);
  }

  // Requisito 4 - Função que faz o fetch das categorias na API

  async handleFetchCategories() {
    this.setState({ categories: [] }, () => {
      api.getCategories().then((data) => {
        this.setState({ categories: data });
      });
    });
  }

  // Requisito 6 - Função que faz o fetch dos produtos por categoria

  async handleFetchFromCategory(id) {
    const request = await api.getProductsFromCategoryAndQuery(id, '');
    if (request.results.length === 0) {
      this.setState({ productsList: [], message: true });
    } else {
      this.setState({ productsList: request.results, message: false });
    }
  }

  render() {
    const { search, message, productsList, categories } = this.state;
    return (
      <>
        <SearchBar
          search={ search }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <aside>
          <Categories
            categories={ categories }
            handleClick={ this.handleCategoryEvent }
          />
        </aside>
        {message ? <ProductNotFound /> : <ProductList products={ productsList } /> }
      </>
    );
  }
}

// Referências:
// getAttribute: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/getAttribute
