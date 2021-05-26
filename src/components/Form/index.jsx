import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import data from './data';
import './style.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      formInfos: {
        fullName: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        adress: '',
        adressNum: '',
        comp: '',
        payMode: '',
      },
      error: {},
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((ant) => ({
      formInfos: { ...ant.formInfos, [name]: value },
    }));
  }

  validateField = () => {
    const { formInfos: {
      fullName, email, cpf, phone, cep, adress, payMode, adressNum,
    } } = this.state;

    const fails = {};
    const maxLengthCpf = 11;
    const maxLengthCep = 8;
    const maxLengthPhone = 11;

    if (fullName.length === 0) fails.fullName = true;
    if (!email.includes('@')) fails.email = true;
    if (cpf.length !== maxLengthCpf) fails.cpf = true;
    if (phone.length !== maxLengthPhone) fails.phone = true;
    if (cep.length !== maxLengthCep) fails.cep = true;
    if (!adress) fails.adress = true;
    if (!payMode) fails.payMode = true;
    if (!adressNum) fails.adressNum = true;

    this.setState({
      error: fails,
    });
  }

  resetState = (event) => {
    const { cleanCart, endShopping } = this.props;
    event.preventDefault();
    this.validateField();
    const { error } = this.state;
    if (!error) {
      endShopping();
      this.setState({ formInfos: {}, error: {} });
      cleanCart();
    }
  }

  render() {
    const { formInfos, error } = this.state;
    const payModes = ['Boleto', 'Visa', 'Mastercard', 'Elo'];

    return (
      <div>
        <h1>Informações do Comprador</h1>
        <form>
          {data.map(({ type, dataId, maxLength, className, name, placeHolder }) => (
            <Input
              key={ name }
              type={ type }
              dataId={ dataId }
              maxLength={ maxLength }
              className={ error[name] ? 'notValidated' : className }
              name={ name }
              placeHolder={ placeHolder }
              onChange={ this.handleChange }
              value={ formInfos.name }
            />
          ))}
          <fieldset>
            Método de Pagamento
            {payModes.map((payMode, index) => (
              <label htmlFor={ index } key={ index }>
                <input
                  type="radio"
                  value={ payMode }
                  name="payMode"
                  id={ index }
                  onClick={ this.handleChange }
                />
                { payMode}
              </label>
            ))}
          </fieldset>
          <button type="submit" onClick={ this.resetState }>
            Finalizar Compra
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cleanCart: PropTypes.func,
  endShopping: PropTypes.func,
}.isRequired;

export default Form;
