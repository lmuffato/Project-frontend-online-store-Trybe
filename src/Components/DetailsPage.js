import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 1,
      thumbnail: '',
      qnt: 1,
    };
  }

  componentDidMount() {
    this.handleButton();
  }

  handleButton = () => {
    const { location } = this.props;
    const { state } = location;
    this.setState((prevState) => ({
      ...prevState,
      title: state[0],
      price: state[1],
      thumbnail: state[2],
    }
    ));
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const [title, price, thumbnail] = state;
    const { qnt } = this.state;
    return (
      <div>
        <Link to="/"> Voltar </Link>
        <div data-testid="product-detail-name">
          <p>
            Título:
            {title}
          </p>
          <p>
            Preço:
            {price}
          </p>
          <img style={ { width: '100px' } } src={ thumbnail } alt="imagem" />
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={
              ((event) => this.setState({ qnt: event.target.value }))
            }
          />
          Quantidade
          <button
            type="submit"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleButton }
          >
            Adicionar ao carrinho
          </button>
          <Link
            to={ {
              pathname: '/CartShopPage', state: [title, price, thumbnail, qnt],
            } }
          >
            <button type="submit" data-testid="shopping-cart-button">
              Ir para o carrinho
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  location: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired,
};

export default DetailsPage;
