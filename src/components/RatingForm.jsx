import React, { Component } from 'react';

class RatingForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      prevComments: [],
    };
  }

  currentComment = (evt) => {
    if (evt.target.name === 'comment') {
      this.setState({
        comment: evt.target.value,
      });
    }
  }

  sendComment = () => {
    this.setState(({ comment, prevComments }) => ({
      prevComments: [...prevComments, comment],
      comment: '',
    }));
  }

  render() {
    const { comment, prevComments } = this.state;
    return (
      <div>
        <div>
          <h3>Avaliações</h3>
          {prevComments.map((comments, index) => (
            <p key={ index }>{`Comentário: ${comments}`}</p>
          ))}
        </div>
        <form>
          <input placeholder="E-mail" type="text" name="email" />
          <input
            type="number"
            placeholder="Nota"
            min={ 0 }
            max={ 5 }
          />
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              type="text"
              onChange={ this.currentComment }
              name="comment"
              value={ comment }
              placeholder="Mensagem(opcional)"
            />
          </div>
          <button onClick={ this.sendComment } type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default RatingForm;
