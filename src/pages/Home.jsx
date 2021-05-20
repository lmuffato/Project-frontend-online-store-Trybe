import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../components/CardProduct';

import styles from './styles.module.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      inputValue: '',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  handleSubmit = async () => {
    const { inputValue } = this.state;
    const request = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({ products: request.results });
  };

  async handleCategoryClicked(id) {
    const request = await getProductsFromCategoryAndQuery(id);
    this.setState({ products: request.results });
  }

  checkRequest = () => {
    const { products } = this.state;
    const { onClick } = this.props;
    if (products.length === 0) {
      return (
        <h2 className={ styles.checkedProduct }>Nenhum Produto encontrado</h2>
      );
    }
    return (
      <section className={ styles.productsItems }>
        {products.map((product) => (
          <CardProduct
            onClick={ onClick }
            key={ product.id }
            product={ product }
          />
        ))}
      </section>
    );
  };

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { cartProductLength } = this.props;
    return (
      <main>
        <header className={ styles.header }>
          <div className={ styles.cartLogo }>
            <h2 className={ styles.titleLogo }>
              Shopping Cart 2.0
            </h2>
            <Link
              className={ styles.btnCart }
              data-testid="shopping-cart-button"
              to="/carrinho"
            >
              <RiShoppingCartFill className={ styles.iconCart } />
              <span
                className={ styles.lengthCart }
                data-testid="shopping-cart-size"
              >
                { cartProductLength }
              </span>
            </Link>
          </div>
          <div className={ styles.inputContent }>
            <p className={ styles.textInput } data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <input
              id="search"
              data-testid="query-input"
              type="text"
              onChange={ this.handleChange }
              className={ styles.inputSearch }
              placeholder="O que você está procurando?"
            />
            <button
              className={ styles.btnSearch }
              data-testid="query-button"
              type="button"
              onClick={ this.handleSubmit }
            >
              <FaSearch className={ styles.iconSearch } />
            </button>
          </div>

        </header>
        <h2 className={ styles.title }>Categorias</h2>
        <ul className={ styles.categoryList }>
          {categories.map(({ id, name }) => (
            <li
              key={ id }
              className={ styles.categoryItem }
            >
              <button
                className={ styles.categoryItemBtn }
                type="button"
                onClick={ () => this.handleCategoryClicked(id) }
                data-testid="category"
              >
                {name}
              </button>
            </li>))}
        </ul>
        <h2 className={ styles.title }>Produtos</h2>
        {this.checkRequest()}
      </main>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
  cartProductLength: PropTypes.number.isRequired,
};

export default Home;

// CartList component is now >  CartItem
// CartItem page is now >  Cart
