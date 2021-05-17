import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategory } from '../../services/api';
import Category from './components/Category';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.filterFromCategory = this.filterFromCategory.bind(this);
  }

  async filterFromCategory(categoryId) {
    let products = await getProductsFromCategory(categoryId);
    products = products.results;
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <input type="text" />
        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Category onCategorySelection={ this.filterFromCategory } />
        { products.map((product) => (
          <h2 key={ product.id }>
            { product.title }
          </h2>
        )) }
      </>
    );
  }
}

export default Home;
