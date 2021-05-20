import React from 'react';
import Input from '../Input';
import data from './data';

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
      fullName, email, cpf, phone, cep, adress, payMode,
    } } = this.state;

    const fails = {};
    if (fullName.length === 0) fails.fullName = true;
    if (!email.includes('@')) fails.email = true;
    if (cpf.length !== 11) fails.cpf = true;
    if (phone.length !== 11) fails.phone = true;
    if (cep.length !== 8) fails.cep = true;
    if (!adress) fails.adress = true;
    if (!payMode) fails.payMode = true;

    this.setState({
      error: fails,
    });
  }

  resetState = (event) => {
    event.preventDefault();
    this.validateField();
    const { error } = this.state;
    if (!error) this.setState({ formInfos: {}, error: {} });
  }

  render() {
    const { formInfos } = this.state;
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
              className={ className }
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

export default Form;
