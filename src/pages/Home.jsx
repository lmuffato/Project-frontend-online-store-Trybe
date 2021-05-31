import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaBoxOpen } from 'react-icons/fa';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
        <div className={ styles.contentProductempty }>
          <h2 className={ styles.checkedProduct }>Nenhum Produto encontrado</h2>
          <FaBoxOpen className={ styles.boxEmpty } />
        </div>
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
        <Header
          cartProductLength={ cartProductLength }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
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
        <Footer />
      </main>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
  cartProductLength: PropTypes.number.isRequired,
};

export default Home;
