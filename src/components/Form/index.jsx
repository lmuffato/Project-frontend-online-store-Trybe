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
      },
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { formInfos } = this.state;
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
        </form>
      </div>
    );
  }
}

export default Form;
