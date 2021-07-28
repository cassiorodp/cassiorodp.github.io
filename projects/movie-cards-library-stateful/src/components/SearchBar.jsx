import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';
import './searchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        <label
          htmlFor={ searchText }
          data-testid="text-input-label"
          className="form-label"
        >
          Inclui o texto
          <input
            name="searchText"
            className="form-control"
            id={ searchText }
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <div className="form-check">
          <label
            htmlFor="input-checkbox"
            data-testid="checkbox-input-label"
            className="form-check-label"
          >
            Mostrar somente favoritos
            <input
              name="bookmarkedOnly"
              className="form-check-input"
              id="input-checkbox"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
        </div>
        <SelectGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
