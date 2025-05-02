import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ image, title, className }) => {
  return (
    <div className={`banner ${className || ''}`}>
      <img src={image} alt="" className="banner__img" />
      <div className="banner__overlay"></div>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Banner;