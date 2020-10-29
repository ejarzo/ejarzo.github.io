import React from 'react';
import Link from 'gatsby-link';

export default ({ inverted }) => {
  return (
    <header className="row" style={{ background: '#222', height: 26 }}>
      <div className="SiteWrapper" style={{ marginTop: 0 }}>
        <h1>
          <Link
            style={{
              color: 'white',
              // background:  '#222',
            }}
            to="/"
          >
            Elias Jarzombek
          </Link>
        </h1>
        <Link
          style={{
            float: 'right',
            color: 'white',
            // background: inverted && '#222',
            // lineHeight: '1.1',
          }}
          to="/bio"
        >
          Bio
        </Link>
      </div>
    </header>
  );
};
