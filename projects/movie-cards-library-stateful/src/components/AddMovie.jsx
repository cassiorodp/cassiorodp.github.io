import React from 'react';
import PropTypes from 'prop-types';
import TitleandSubtitle from './TitleandSubtitle';
import ImageandSinopsis from './ImageandSinopsis';
import RatingandGenre from './RatingandGenre';
import './addMovie.css';

const INICIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INICIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="add-movie-form">
        <TitleandSubtitle
          title={ title }
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImageandSinopsis
          imagePath={ imagePath }
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <RatingandGenre
          rating={ rating }
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          className="btn btn-dark"
          onClick={ this.handleButton }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
