import React from 'react';
import Link from 'gatsby-link';

export default props => {
  const { to, label, imgSrc } = props;
  return (
    <Link to={to}>
      <div className="ProjectLink__ImageWrapper">
        <img src={imgSrc} />
        <span className="ProjectLink__Label">{label}</span>
      </div>
    </Link>
  );
};
