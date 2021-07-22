// implement MovieList component here
import React from 'react';
import PropsTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        <h2 className="page-subtitle">Best Movies of The Week</h2>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

export default MovieList;
