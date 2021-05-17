import React, { Component } from 'react';
import { string, number } from 'prop-types';

class cardItem extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    console.log(this.props);
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="produto" />
        <span>{ price }</span>
      </div>
    );
  }
}

cardItem.propTypes = {
  title: string,
  image: string,
  price: number,
}.isRequired;

export default cardItem;
