import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getEvaluations } from '../../services/evaluationAPI';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      evaluations: [],
    };
    this.getProductEvaluations = this.getProductEvaluations.bind(this);
  }

  componentDidMount() {
    this.getProductEvaluations();
  }

  async getProductEvaluations() {
    const { id } = this.props;
    const evaluations = await getEvaluations(id);
    this.setState({ evaluations });
  }

  render() {
    const { id } = this.props;
    const { evaluations } = this.state;
    return (
      <section>
        {
          evaluations.map(
            ({ email, score, message }) => (
              <section key={ `${id}${email}` }>
                <h2>{email}</h2>
                <h3>{score}</h3>
                <p>{message}</p>
              </section>
            ),
          )
        }
      </section>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductDetails;
