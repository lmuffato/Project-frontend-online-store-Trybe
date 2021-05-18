import React from 'react';
import getProductsFromCategoryAndQuery from '../services/api';

class ProductDetails extends React.Component {

  constructor(){
    super();
    this.fetchProduct = this.fetchProduct.bind(this);
    this.listProductById = this.listProductById.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
   }  

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const productData = await getProductsFromCategoryAndQuery(1, id );
    console.log('product Data: ', productData);
  }

  listProductById() {
    const { match: { params: { id } } } = this.props;
    const { location: { state: { obj } } } = this.props;
    const filteredProduct = obj.filter((product) => product.id === id)
    console.log('Produto filtrado', filteredProduct);
  }

  render() {
    this.listProductById();
    return (
      <div>Hello World</div>
    )
  }
}

export default ProductDetails;