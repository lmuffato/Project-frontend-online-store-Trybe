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
      isClicked: false,
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
    this.setState({ loading: true }, async () => {
      const { results } = await api.getProductsFromCategoryAndQuery(radio, input);
      this.setState({
        loading: false,
        products: results,
        isClicked: true,
      });
    });
  }

  handleRadio = (event) => {
    const { id } = event.target;
    this.setState({ radio: id }, () => this.handleProductsList());
  }

  render() {
    const { products, loading, isClicked, input } = this.state;
    if (loading) return (<p>Carregando...</p>);
    return (
      <>
        <SearchBar
          value={ input }
          onClick={ this.handleClick }
          onChange={ this.handleOnChange }
        />
        <Categories onClick={ this.handleRadio } />
        <ProductList products={ products } isClicked={ isClicked } />
        <CartButton data-testid="shopping-cart-button" />
      </>
    );
  }
}

export default Home;
