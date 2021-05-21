import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import './styleStars.css';
// referencia: https://ichi.pro/pt/como-construir-um-componente-de-classificacao-por-estrelas-no-react-240588683569051
// https://www.youtube.com/watch?v=Pl2Fn6PIpaI&ab_channel=LevelUpDeveloper
export default class EvaluationStar extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      hoverRating: 0,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onSaveRating = this.onSaveRating.bind(this);
    this.functionArr = this.functionArr.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { rating, hoverRating } = this.state;
    if (prevState.rating !== rating) return this.onSaveRating;
    if (prevState.hoverRating !== hoverRating) return this.onMouseEnter;
    if (prevState.hoverRating !== hoverRating) return this.onMouseLeave;
  }

  onMouseEnter(index) {
    this.setState({ hoverRating: index });
  }

  onMouseLeave() {
    this.setState({ hoverRating: 0 });
  }

  onSaveRating(index) {
    const { onChange } = this.props;
    this.setState({ rating: index });
    console.log(index);
    onChange(index);
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
    const { rating, hoverRating } = this.state;
    const array = this.functionArr();
    return (
      <div className="box flex">
        {array.map((index) => (
          <Icon
            key={ index }
            index={ index }
            rating={ rating }
            hoverRating={ hoverRating }
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave }
            onSaveRating={ this.onSaveRating }
          />
        ))}
      </div>
    );
  }
}

EvaluationStar.propTypes = {
  onChange: PropTypes.func,
}.isRequired;
