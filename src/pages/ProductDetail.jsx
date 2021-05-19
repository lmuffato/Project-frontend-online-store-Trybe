import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchProduct from '../services/itemApi';
import shoppingCart from '../imagens/shoppingCart.svg';
import Loading from './Loading';
import Button from '../components/Button';
import '../styles/ProductDetail.css';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  handleProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const itemArray = await fetchProduct(params.id);
    this.setState({
      item: itemArray,
      loading: false,
    });
  }

  render() {
    const { item, loading } = this.state;
    const loadingElement = <Loading />;

    if (loading) {
      return loadingElement;
    }

    console.log(item);

    return (
      <div>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
          className="shopping-cart"
        >
          <img
            src={ shoppingCart }
            alt="Carrinho de compras"
            className="shopping-cart-image"
          />
        </Link>
        <div className="product-detail">
          <div className="product-card">
            <div className="product-show">
              <p data-testid="product-detail-name">{item.title}</p>
              <img src={ item.thumbnail } alt={ item.thumbnail_id } width="100px" />
              <p>
                R$
                {item.price}
              </p>
            </div>
            <Button item={ item } dataTestId="product-detail-add-to-cart" />
          </div>
          <div className="specifications">
            Especificações Técnicas:
            {
              item.attributes.map((attribute) => (
                <p key={ attribute.id }>{`${attribute.name}: ${attribute.value_name}`}</p>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;
