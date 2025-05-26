import React from 'react';
import '../../styles/components/Tag.scss';

const Tag = ({ label }) => {
  return (
    <span className="tag">
      {label}
    </span>
  );
};

export default Tag;