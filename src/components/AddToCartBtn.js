import React from 'react';

export default class AddToCartBtn extends React.Component {
  constructor() {
    super();
    this.infoRender = this.infoRender.bind(this);
  }

  infoRender() {
    const { query, category, id } = this.props;
    const data = {
      query,
      category,
      id,
    };
    const Item = JSON.parse(localStorage.getItem('shoppingcart'));
    if (Item === null) {
      localStorage.setItem('shoppingcart', JSON.stringify(data));
    } else {
      const newItems = { ...Item, ...data };
      localStorage.setItem('shoppingcart', JSON.stringify(newItems));
    }
  }

  render() {
    const { dataid } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataid }
        onClick={ this.infoRender }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}
