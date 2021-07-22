import React  from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemonsInfo: { name, type, averageWeight, image } } = this.props;

    return (
      <section >
        <div className = 'pokemon-info'>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name} />
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemonsInfo: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon

