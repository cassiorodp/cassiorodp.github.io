import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.auxFunc();
  }

  auxFunc = async () => {
    const { match: { params: { id } } } = this.props;

    const movieDetails = await movieAPI.getMovie(id);
    this.setState({ isLoading: true }, () => {
      this.setState({
        movie: movieDetails,
        isLoading: false,
      });
    });
  }

  deleteMovie = () => {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const movieInfo = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ imagePath } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );

    return (
      <div>
        {isLoading ? <Loading /> : movieInfo}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
