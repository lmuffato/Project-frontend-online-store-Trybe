import React, { Component } from "react";
import PropTypes from "prop-types";
import EvaluationStar from "./evaluationStar/EvaluationStar";

export default class EvaluetionForm extends Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStar = this.handleStar.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { stars } = this.state;
    if (prevState.stars !== stars) {
      return this.handleStar();
    }
  }

  handleStar(value) {
    console.log('index', value);
    if (value) {
      this.setState({ stars: value });
    }
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { stars, evaluationText, evaluationEmail } = this.state;
    const { onChangeEmail, functionValue } = this.props;
    return (
      <div>
        <h2>Avaliações</h2>
        <form>
          <input
            placeholder="Email"
            onChange={this.handleChange}
            type="email"
            name="evaluetionEmail"
          />
          <textarea
            data-testid="product-detail-evaluetion"
            placeholder="Mensagem (opcional)"
            name="evaluetionText"
            onChange={this.handleChange}
          />
          <input onClick={functionValue} value="Avaliar" type="submit" />
          <EvaluationStar onChange={ this.handleStar } />
        </form>
        <div>
          <p>{evaluationText}</p>
          <div>{stars}</div>
          <p>{evaluationEmail}</p>
        </div>
      </div>
    );
  }
}

EvaluetionForm.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangeTextAvaliation: PropTypes.func.isRequired,
  functionValue: PropTypes.func.isRequired,
};
