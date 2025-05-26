import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ score }) => {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span 
        key={i} 
        className={`rating__star ${i <= score ? 'rating__star--active' : 'rating__star--inactive'}`}
      >
        <i className="fas fa-star"></i>
      </span>
    );
  }
  
  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  score: PropTypes.number.isRequired
};

export default Rating;