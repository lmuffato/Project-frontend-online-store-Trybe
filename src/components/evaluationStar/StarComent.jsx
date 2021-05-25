import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconComent from './IconComent';
import './styleStars.css';

// referencia: https://ichi.pro/pt/como-construir-um-componente-de-classificacao-por-estrelas-no-react-240588683569051
// https://www.youtube.com/watch?v=Pl2Fn6PIpaI&ab_channel=LevelUpDeveloper
export default class EvaluationStar extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
  }

  componentDidMount() {
    this.setRating();
  }

  setRating() {
    const { setStar } = this.props;
    if (setStar) {
      console.log(setStar);
      this.setState({ rating: setStar });
    }
  }

  functionArr() {
    const a = 1;
    const b = 2;
    const c = 3;
    const d = 4;
    const e = 5;
    const arr = [a, b, c, d, e];
    return arr;
  }

  render() {
    const { rating } = this.state;
    console.log(rating);
    const array = this.functionArr();
    return (
      <div className="box flex">
        {array.map((index) => (
          <IconComent
            key={ index }
            stars={ index }
            rating={ rating }
          />
        ))}
      </div>
    );
  }
}

EvaluationStar.propTypes = {
  onChange: PropTypes.func,
}.isRequired;
