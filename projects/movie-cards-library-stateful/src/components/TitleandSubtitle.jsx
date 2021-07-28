import React from 'react';
import PropTypes from 'prop-types';

class TitleandSubtitle extends React.Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="input-title"
          data-testid="title-input-label"
          className="form-label"
        >
          Título
          <input
            name="title"
            className="form-control"
            id="input-title"
            placeholder="Insert movie title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="input-subtitle"
          data-testid="subtitle-input-label"
          className="form-label"
        >
          Subtítulo
          <input
            name="subtitle"
            className="form-control"
            placeholder="Insert movie subtitle"
            type="text"
            id="input-subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

TitleandSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleandSubtitle;
