import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEmail: '',
      valueText: '',
      rating: 0,
      reviewList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  renderReviews() {
    const { listOfReviews } = this.state;
    return (
      <div>
        <h3>Comentários</h3>
        {listOfReviews.map((review) => (
          <div key={ review.id }>
            <h4>{ review.title }</h4>
            <p>{ review.content }</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { valueEmail, valueText, reviewList, rating } = this.state;

    return (
      <fieldset action="">
        <form>
          <input
            value={ valueEmail }
            type="text"
            placeholder="Digite seu email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={ rating }
            id="rating"
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
          <p>
            <textarea
              type="text"
              placeholder="mensagem(Opcional)"
              name="Mensagem"
              cols="100"
              rows="10"
              value={ valueText }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
          </p>
          <p>
            <button type="submit"> Avaliar</button>
          </p>
        </form>
        {!reviewList.length ? <h3>Sem Comentários</h3> : this.renderReviews()}
      </fieldset>
    );
  }
}
