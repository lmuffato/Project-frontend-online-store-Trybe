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
    const { input } = this.state;
    this.setState({ loading: true }, async () => {
      const { results } = await api.getProductsFromCategoryAndQuery('all', input);
      this.setState({
        loading: false,
        products: results,
        isClicked: true,
      });
    });
  }

  render() {
    const { products, loading, isClicked } = this.state;
    if (loading) return (<p>Carregando...</p>);
    return (
      <>
        <SearchBar onClick={ this.handleClick } onChange={ this.handleOnChange } />
        <Categories />
        <ProductList products={ products } isClicked={ isClicked } />
        <CartButton data-testid="shopping-cart-button" />
      </>
    );
  }
}

export default Home;
