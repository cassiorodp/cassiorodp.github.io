import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, NewMovie, MovieDetails, MovieList, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
