import React, { Component } from 'react';

import { arrayOf, shape, string, number } from 'prop-types';
import inputsInfo from '../services/data';

export default class Checkout extends Component {
  render() {
    const { location } = this.props;
    const { cartList } = location.state;

    return (
      <section>
        <div>
          <h1>Revise seus produtos</h1>

          <div>
            { cartList.map(({ title, img, price, quant }) => (
              <div key={ title }>
                <img src={ img } alt={ title } />
                <p>{title}</p>
                <p>{price}</p>
                <p>{quant}</p>
              </div>
            ))}

          </div>

          <div>
            <h1>Informação do comprador</h1>
            <forms>
              {inputsInfo.map((inputInfo) => <input key={ inputInfo.placeHolder } { ...inputInfo } />)}
            </forms>
          </div>
        </div>
      </section>
    );
  }
}

Checkout.propTypes = {
  location: shape({
    state: shape({
      cartList: arrayOf(shape({
        img: string,
        price: string,
        quant: number,
        title: string,
      })),
    }),
  }).isRequired,
};
