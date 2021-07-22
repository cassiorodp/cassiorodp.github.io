// implement MovieCard component here
import React from 'react';
import PropsTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <section className="movie-card movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    title: PropsTypes.string,
    subtitle: PropsTypes.string,
    storyline: PropsTypes.string,
    rating: PropsTypes.number,
    imagePath: PropsTypes.string,
  }).isRequired,
};

export default MovieCard;
