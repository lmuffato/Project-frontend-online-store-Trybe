import React, { Component } from 'react';
import { MdLocalShipping } from 'react-icons/md';

class FreeShipping extends Component {
  render() {
    return (
      <div data-testid="free-shipping">
        <MdLocalShipping size={ 25 } />
        <p>Frete grátis</p>
      </div>
    );
  }
}

export default FreeShipping;
