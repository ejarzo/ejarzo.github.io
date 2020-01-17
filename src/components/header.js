import React from 'react';
import Link from 'gatsby-link';

export default ({ inverted }) => {
  return (
    <div className="row" style={{ marginBottom: 50 }}>
      <div className="col-12">
        <h1>
          <Link
            style={{
              color: inverted && 'white',
              background: inverted && '#222',
            }}
            to="/"
          >
            Elias Jarzombek
          </Link>
        </h1>
        <Link
          style={{
            float: 'right',
            color: inverted && 'white',
            background: inverted && '#222',
            lineHeight: '1.1',
          }}
          to="/about"
        >
          Bio
        </Link>
      </div>
    </div>
  );
};
