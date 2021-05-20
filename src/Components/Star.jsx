import React, { Component } from 'react';
import { string, number, func } from 'prop-types';
import '../styles/Star.css';

class Star extends Component {
  render() {
    const { src, id, onClick } = this.props;
    return (
      <button
        className="buttonStar"
        type="button"
        onClick={ () => onClick(id) }
      >
        <img src={ src } alt="Star" className="img_star" />
      </button>
    );
  }
}

Star.propTypes = {
  src: string,
  id: number,
  onClick: func,
}.isRequired;

export default Star;
