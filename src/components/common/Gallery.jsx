import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Gallery = ({ housings }) => {
  return (
    <div className="gallery">
      {housings.map(housing => (
        <Card 
          key={housing.id}
          id={housing.id}
          title={housing.title}
          cover={housing.cover}
        />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  housings: PropTypes.array.isRequired
};

export default Gallery;