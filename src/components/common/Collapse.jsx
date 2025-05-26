import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span className={`collapse__icon ${isOpen ? 'collapse__icon--open' : ''}`}>
          <i className="fas fa-chevron-up"></i>
        </span>
      </button>
      
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((item, index) => (
              <li key={index} className="collapse__list-item">{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
};

export default Collapse;