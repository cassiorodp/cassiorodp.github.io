import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    this.setState({ shouldRedirect: false }, () => {
      movieAPI.createMovie(newMovie);
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    const form = (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
    return (
      <div>
        {shouldRedirect ? <Redirect to="/" /> : form}
      </div>
    );
  }
}
export default NewMovie;
