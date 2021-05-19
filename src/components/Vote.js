import React from 'react';
import PropTypes from 'prop-types';

import './styles/Vote.css';

const Vote = (props) => {
  const { rating, onVote } = props;
  const lis = [];
  const maxNote = 5;
  for (let i = 0; i <= maxNote; i += 1) {
    if (rating - i >= 0) {
      lis.push(1);
    } else {
      lis.push(0);
    }
  }

  let li;
  if (lis[0] === 0) {
    lis.shift();
    li = () => lis.map((_, index) => (
      <li key={ index }>
        <button type="button" value={ index + 1 } onClick={ onVote }>🌑️</button>
      </li>
    ));
  } else {
    lis.shift();
    li = () => lis.map((item, i) => (
      <li key={ i }>
        {
          item === 1
            ? <button type="button" value={ i + 1 } onClick={ onVote }>⭐️</button>
            : <button type="button" value={ i + 1 } onClick={ onVote }>🌑️</button>
        }
      </li>
    ));
  }
  return (
    <div>
      <ul>
        { li() }
      </ul>
    </div>
  );
};

Vote.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onVote: PropTypes.func.isRequired,
};

export default Vote;
