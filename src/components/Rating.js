import React from 'react';
import PropTypes from 'prop-types';
import Vote from './Vote';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProduct: '',
      email: '',
      rating: 0,
      msg: '',
    };

    this.fetchId = this.fetchId.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.onVote = this.onVote.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    this.fetchId(productId);
  }

  onVote({ target }) {
    const { value } = target;
    this.setState({ rating: parseInt(value, 10) });
  }

  changeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  fetchId(id) {
    this.setState({ idProduct: id });
  }

  save() {
    const { idProduct, email, rating, msg } = this.state;
    localStorage.setItem(idProduct, [...email, rating, msg]);
  }

  submitForm() {
    this.save();
  }

  render() {
    const { email, msg, rating } = this.state;
    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <div>
            <input
              id="email"
              name="email"
              value={ email }
              onChange={ this.changeInput }
              type="email"
              placeholder="Email"
            />
            <div>
              <Vote rating={ rating } onVote={ this.onVote } />
            </div>
          </div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              name="msg"
              value={ msg }
              onChange={ this.changeInput }
              placeholder="Mensagem (opcional)"
            />
          </div>
          <div>
            <button type="button" onClick={ this.submitForm }>Avaliar</button>
          </div>
        </form>
      </div>
    );
  }
}

Rating.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Rating;
