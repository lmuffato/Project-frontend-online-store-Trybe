import React from 'react';
import PropTypes from 'prop-types';

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
    if (!Item) {
      localStorage.setItem('shoppingcart', JSON.stringify([data]));
    } else {
      const newItems = [...Item, data];
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

AddToCartBtn.propTypes = {
  query: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dataid: PropTypes.string.isRequired,
};
