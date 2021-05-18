import React from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import CartButton from '../components/CartButton';
import * as api from '../services/api';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      input: '',
      products: [],
      radio: '',
    };
  }

  handleOnChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value });
  }

  handleClick = () => {
    this.handleProductsList();
  }

  handleProductsList = () => {
    const { input, radio } = this.state;
    this.setState({ loading: true, products: [] }, async () => {
      const { results } = await api.getProductsFromCategoryAndQuery(radio, input);
      if (results.length === 0) this.setState({ products: 'none' });
      else this.setState({ products: results });
      this.setState({ loading: false });
    });
  }

  handleRadio = (event) => {
    const { id } = event.target;
    this.setState({ radio: id }, () => this.handleProductsList());
  }

  render() {
    const { products, loading, isClicked, input } = this.state;
    return (
      <>
        <SearchBar
          value={ input }
          onClick={ this.handleClick }
          onChange={ this.handleOnChange }
        />
        <Categories onClick={ this.handleRadio } />
        { loading && '...carregando' }
        <ProductList products={ products } isClicked={ isClicked } />
        <CartButton data-testid="shopping-cart-button" />
      </>
    );
  }
}

export default Home;
