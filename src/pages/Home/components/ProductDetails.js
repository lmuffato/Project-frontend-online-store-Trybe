import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategory } from '../../../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      addProduct: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadProduct();
  }

  handleClick({ target }) {
    this.setState({
      addProduct: target.id,
    });
    const { setCart } = this.props;
    setCart([target.id]);
  }

  async loadProduct() {
    const { location, match } = this.props;
    if (location && match) {
      const { category, id } = match.params;
      let products = [];
      let productFound = {};
      if (location.state) {
        const { products: productsState } = location.state;
        products = productsState;
      } else {
        products = await getProductsFromCategory(category);
        products = products.results;
      }

      productFound = products.find((product) => product.id === id);

      this.setState({
        product: productFound,
      });
    }
  }

  render() {
    const { product } = this.state;

    if (!product.attributes) return <h1>Loading...</h1>;

    return (
      <div>
        <header>
          <Link to="/">Voltar</Link>
          <Link to="/cart">Carrinho</Link>
        </header>
        <h1 data-testid="product-detail-name">{ product.title }</h1>
        <span>{`R$ ${product.price}`}</span>
        <img src={ product.thumbnail } alt={ product.title } />
        <h3>Especificações técnicas</h3>
        <ul>
          { product.attributes.map((attribute) => (
            <li key={ attribute.id }>
              { `${attribute.name}: ${attribute.value_name}` }
            </li>
          )) }
        </ul>
        <button
          type="button"
          onClick={ this.handleClick }
          id={ product.id }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
