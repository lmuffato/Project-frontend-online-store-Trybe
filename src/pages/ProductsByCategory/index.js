import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import ProductCard from '../../services/ProductCard';
import AddToCartBtn from '../../components/AddToCartBtn';

class ProductsByCategory extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      loading: true,
      category: id,
      products: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  async componentDidMount() {
    const { category } = this.state;
    const data = await getProductsFromCategoryAndQuery(category);
    this.fetchProducts(data.results);
  }

  fetchProducts(products) {
    this.setState({
      loading: true,
    }, () => {
      this.setState({
        loading: false,
        products,
      });
    });
  }

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return 'Carregando...';
    }

    return (
      <div>
        <ul>
          {products.map(({
            title,
            price,
            thumbnail,
            id,
            category_id: catId,
            attributes },
          index) => (
            <li key={ index }>
              <ProductCard
                id={ id }
                title={ title }
                price={ price }
                imagePath={ thumbnail }
                button={
                  <AddToCartBtn
                    category={ catId }
                    query={ title }
                    id={ id }
                    dataid="product-add-to-cart"
                  />
                }
                attributes={ attributes }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ProductsByCategory.propTypes = {
  id: PropTypes.string,
};

ProductsByCategory.defaultProps = {
  id: '',
};

export default ProductsByCategory;
