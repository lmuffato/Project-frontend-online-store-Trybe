import React, { Component } from 'react';

class CartSize extends Component {
  render() {
    const { size } = this.props;
    return (
      <div><p>{ size }</p></div>
    );
  }
}

export default CartSize;
