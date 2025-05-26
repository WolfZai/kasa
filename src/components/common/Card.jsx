import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default Card;