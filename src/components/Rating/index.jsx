import React from 'react';
import { FaStar } from 'react-icons/fa';

import './styles.css';

// usei o modelo do site: https://ichi.pro/pt/como-usar-css-e-react-para-criar-uma-avaliacao-com-estrelas-101140130179867
class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.handleStarClick = this.handleStarClick.bind(this);

    this.state = {
      clickedStar: [false, false, false, false, false],
    };
  }

  handleStarClick(starIndex) {
    const { clickedStar } = this.state;

    const newClickedStar = [...clickedStar];

    for (let index = 0; index <= clickedStar.length; index += 1) {
      if (index <= starIndex) {
        newClickedStar[index] = true;
      } else {
        newClickedStar[index] = false;
      }
    }

    this.setState({ clickedStar: newClickedStar });
  }

  render() {
    const { clickedStar } = this.state;

    const starIndex = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
    };

    return (
      <div id="rating">
        <FaStar
          onClick={ () => { this.handleStarClick(starIndex.zero); } }
          className={ clickedStar[0] ? 'clicked' : '' }
          fill="gray"
        />
        <FaStar
          onClick={ () => { this.handleStarClick(starIndex.one); } }
          className={ clickedStar[1] ? 'clicked' : '' }
          fill="gray"
        />
        <FaStar
          onClick={ () => { this.handleStarClick(starIndex.two); } }
          className={ clickedStar[2] ? 'clicked' : '' }
          fill="gray"
        />
        <FaStar
          onClick={ () => { this.handleStarClick(starIndex.three); } }
          className={ clickedStar[3] ? 'clicked' : '' }
          fill="gray"
        />
        <FaStar
          onClick={ () => { this.handleStarClick(starIndex.for); } }
          className={ clickedStar[4] ? 'clicked' : '' }
          fill="gray"
        />

        <p>
          Nota:
          {' '}
          {clickedStar.reduce((acc, current) => {
            if (current === true) {
              acc += 1;
            }

            return acc;
          }, 0)}
        </p>
      </div>
    );
  }
}

export default Rating;
