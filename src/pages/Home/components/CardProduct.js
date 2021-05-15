import React from 'react';
import NotFound from '../NotFound';
class CardProduct extends React.Component {

  
  
  render() {
    const { products } = this.props;
    
    return(
      <div>
        {products.length === 0 ? <NotFound /> : 
        products.map((product) => (
          <div data-testid="product">
            <p key={product.id}>{product.title}</p>
            <img src={product.thumbnail}></img>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
}

export default CardProduct;
