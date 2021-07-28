import React from 'react';
import PropTypes from 'prop-types';
import './imageandSinopsis.css';

class ImageandSinopsis extends React.Component {
  render() {
    const { imagePath, storyline, handleChange } = this.props;
    return (
      <div className="image-sinopsis">
        <label
          htmlFor="input-image-path"
          data-testid="image-input-label"
          className="form-label"
        >
          Imagem
          <input
            name="imagePath"
            className="form-control"
            placeholder="Insert image path"
            type="text"
            id="input-image-path"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="text-area-storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            className="form-control"
            id="text-area-storyline"
            placeholder="Insert movie sinopsis"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ImageandSinopsis.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageandSinopsis;
