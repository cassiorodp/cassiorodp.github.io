import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <h1 className="movie-card-title">{title}</h1>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
