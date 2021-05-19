import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import ShopCartButton from './ShopCartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async getProductsById(id) {
    const url = `https://api.mercadolibre.com/items?ids=${id}`;
    const data = await fetch(url);
    const item = await data.json();
    return item[0].body;
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const productData = await this.getProductsById(id);
    return this.setState({
      item: productData,
    });
  }

  render() {
    const { item } = this.state;
    const newObj = {
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      qtd: 1,
    };
    return (
      <div data-testid="product-detail-name">
        {item.title}
        <Button obj={ newObj } dataTestId="product-detail-add-to-cart" />
        <ShopCartButton />
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
