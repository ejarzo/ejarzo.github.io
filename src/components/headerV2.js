import React from 'react';
import Link from 'gatsby-link';

export default React.memo(() => {
  const selfLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/ejarzo/',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/jarz_0',
    },
  ];

  return (
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 0 }}>
        <defs>
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${Math.random() * 0.09} ${Math.random() * 0.09}`}
              numOctaves="1"
              result="warp"
            >
              {/* <animate
                attributeName="baseFrequency"
                from=".01"
                to=".1"
                dur="50s"
                repeatCount="indefinite"
              /> */}
            </feTurbulence>
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale={Math.random() * 40}
              in="SourceGraphic"
              // in2="warpOffset"
            />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          marginBottom: 50,
          paddingBottom: 20,
          borderBottom: '1px solid var(--white)',
          textAlign: 'right',
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          <h1 className="HomeLink">Elias Jarzombek</h1>
        </Link>
        <div
          className="SocialLinks"
          style={{
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}
        >
          <Link activeClassName="is-active" to="/bio">
            About
          </Link>{' '}
          {' / '}
          <Link activeClassName="is-active" to="/music">
            Music
          </Link>{' '}
          {' /// '}
          {selfLinks.map(({ label, href, to }, i) => (
            <span key={label}>
              {href && (
                <a href={href} target="blank" rel="noopener noreferrer">
                  {label}
                </a>
              )}
              {to && (
                <Link to={to} target="blank" rel="noopener noreferrer">
                  {label}
                </Link>
              )}
              {i < selfLinks.length - 1 && ' / '}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
});
