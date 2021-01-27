import React from 'react';
import Link from 'gatsby-link';

export default ({ inverted }) => {
  return (
    <header className="row" style={{ background: '#222', height: 26 }}>
      <div className="SiteWrapper" style={{ marginTop: 0 }}>
        <h1>
          <Link style={{ color: 'white' }} to="/">
            Elias Jarzombek
          </Link>
        </h1>
        <Link style={{ float: 'right', color: 'white' }} to="/bio">
          Bio
        </Link>
      </div>
    </header>
  );
};
