import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategory } from '../../services/api';
import ReviewFields from './components/ReviewFields';
import ProductNumber from '../../components/ProductNumber';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      productReviews: {
        productId: 0,
        reviews: [],
      },
    };

    this.getReview = this.getReview.bind(this);
    this.loadReviews = this.loadReviews.bind(this);
  }

  componentDidMount() {
    this.loadProduct();
    this.loadReviews();
  }

  getReview(newReview) {
    const { match, setReviews } = this.props;
    const { id } = match.params;
    const { productReviews: stateReviews } = this.state;

    const { reviews } = stateReviews;

    const productReviews = {
      productId: id,
      reviews: [...reviews, newReview],
    };

    setReviews(productReviews, id);
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

  loadReviews() {
    const { allReviews, match } = this.props;
    const { id } = match.params;

    const foundReview = allReviews.find((review) => review.productId === id);

    if (foundReview) {
      this.setState({
        productReviews: {
          productId: id,
          reviews: foundReview.reviews,
        },
      });
    }
  }

  render() {
    const { product, productReviews } = this.state;
    const { addToCart, cart } = this.props;

    if (!product || !product.attributes) return <h1>Loading...</h1>;

    return (
      <>
        <div>
          <header>
            <Link to="/">Voltar</Link>
            <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
            <ProductNumber cart={ cart } />
          </header>
          <h1 data-testid="product-detail-name">{product.title}</h1>
          <span>{`R$ ${product.price}`}</span>
          <img src={ product.thumbnail } alt={ product.title } />
          <h3>Especificações técnicas</h3>
          <ul>
            {product.attributes.map((attribute) => (
              <li key={ attribute.id }>
                { `${attribute.name}: ${attribute.value_name}`}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={ (event) => addToCart(event, product) }
            id={ product.id }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <ReviewFields
          getReview={ this.getReview }
          productReviews={ productReviews }
        />
        <section>
          { productReviews.reviews.map((review) => (
            <div key={ review.email }>
              <strong>{ review.email }</strong>
              <span>{ review.rating }</span>
              <p>{ review.review }</p>
            </div>
          )) }
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
