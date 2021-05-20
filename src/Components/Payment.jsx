import React, { Component } from 'react';
import Boleto from '../Pictures/Boleto.jpg';
import Cartao from '../Pictures/Cartao.jpg';

class Payment extends Component {
  render() {
    return (
      <>
        <section>
          <h3>Boleto</h3>
          <label htmlFor="radio1">
            <img src={ Boleto } alt="boleto icone" className="imagem" />
            <input id="radio1" type="radio" />
          </label>
        </section>
        <section className="card">
          <h3>Cartão de Crédito</h3>
          <label htmlFor="radio2">
            <input id="radio2" type="radio" />
            Visa
            <img src={ Cartao } alt="cartao icone" className="imagem" />
          </label>
          <label htmlFor="radio3">
            <input id="radio3" type="radio" />
            Master Card
            <img src={ Cartao } alt="cartao icone" className="imagem" />
          </label>
          <label htmlFor="radio1">
            <input id="radio1" type="radio" />
            Elo
            <img src={ Cartao } alt="cartao icone" className="imagem" />
          </label>
        </section>
      </>
    );
  }
}

export default Payment;
