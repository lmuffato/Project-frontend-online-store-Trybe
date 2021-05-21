import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating';
import AddToCartBtn from '../../components/AddToCartBtn';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: [],
    };

    this.fetchProduct = this.fetchProduct.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    this.fetchProduct(data);
  }

  fetchProduct(product) {
    this.setState({
      loading: true,
    }, () => {
      this.setState({
        loading: false,
        product,
      });
    });
  }

  render() {
    const {
      product: {
        id, title, price, attributes, thumbnail, category_id: catId,
      } } = this.state;
    const { loading } = this.state;
    if (loading) return <p>Carregando...</p>;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho-de-compras"
        >
          Carrinho de compras

        </Link>
        { `R$ ${price}` }
        <img src={ thumbnail } alt="Imagem do produto" />
        <div>
          <ul>
            { attributes.map(({ name, value_name: valueName }, index) => (
              <li key={ index }>
                {' '}
                {`${name}: ${valueName}`}
                {' '}
              </li>
            ))}
          </ul>
        </div>
        <Rating productId={ id } />
        <AddToCartBtn
          category={ catId }
          query={ title }
          id={ id }
          dataid="product-detail-add-to-cart"
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
