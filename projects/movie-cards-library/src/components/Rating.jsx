// implement Rating component here
import React from 'react';
import PropsTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <section className="movie-card-rating">
        <div>
          Rating
        </div>
        <div className="rating">
          {rating}
        </div>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropsTypes.number.isRequired,
};

export default Rating;
