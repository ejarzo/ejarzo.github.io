import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

export default props => {
  const { to, label, imgSrc } = props;
  return (
    <Link to={to}>
      <div className="ProjectLink__ImageWrapper">
        <Img
          fluid={imgSrc}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
        <span className="ProjectLink__Label">{label}</span>
      </div>
    </Link>
  );
};
