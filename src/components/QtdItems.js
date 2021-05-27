import React from 'react';
import PropTypes from 'prop-types';

function QtdItems(props) {
  const { qtd, changeQtd, id } = props;
  return (
    <div>
      <span>
        <button
          type="button"
          onClick={ (e) => changeQtd(e, id) }
          value={ 0 }
          data-testid="product-decrease-quantity"
        >
          -

        </button>
        <span data-testid="shopping-cart-product-quantity">{qtd}</span>
        <button
          type="button"
          onClick={ (e) => changeQtd(e, id) }
          value={ 1 }
          data-testid="product-increase-quantity"
        >
          +

        </button>
      </span>
    </div>
  );
}

QtdItems.propTypes = {
  qtd: PropTypes.number.isRequired,
  changeQtd: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default QtdItems;
