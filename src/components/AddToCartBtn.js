import React from 'react';
import * as api from '../services/api';

class AddToCartBtn extends React.Component {
  constructor() {
    super();
    this.infoRender = this.infoRender.bind(this);
    this.saveInformation = this.saveInformation.bind(this);
  }


  async infoRender() {
    const { query, category, id } = this.props;
    const productSearch = await api.getProductsFromCategoryAndQuery(category, query);
    const selected = Object.values(productSearch)[3].filter((product) => product.id === id);
    this.saveInformation(selected);
  }

  saveInformation(param) {
    const data = param
    const Item = JSON.parse(localStorage.getItem('shoppingcart'));
    if (Item === null) {
      localStorage.setItem('shoppingcart', JSON.stringify(data));
    } else {
      const newItems = [...Item, ...data]
      localStorage.setItem('shoppingcart', JSON.stringify(newItems));
    }
  }

  render() {
    const { dataid } = this.props;
    return (
      <button
        data-testid={dataid}
        onClick={this.infoRender}
      >
        Adicionar ao Carrinho
      </button>
    )
  }
}

export default AddToCartBtn;


