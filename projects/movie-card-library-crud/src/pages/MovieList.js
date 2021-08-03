import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';
import './movie-list.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.movieState();
  }

  // Function that calls getMovies()
  movieState = async () => {
    const data = await movieAPI.getMovies();
    this.setState({ isLoading: true }, () => {
      this.setState((prevState) => ({
        movies: [...prevState.movies, ...data],
        isLoading: false,
      }));
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    const movieCards = (
      <div>
        <section data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </section>
        <Link to="/movies/new" className="add-card">ADICIONAR CARTÃO</Link>
      </div>
    );
    // Render Loading here if the request is still happening

    return (
      <div>
        {isLoading ? <Loading /> : movieCards}
      </div>
    );
  }
}

export default MovieList;
