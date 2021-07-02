import React from 'react';

import SiteWrapper from '../components/SiteWrapper.js';
import SEO from '../components/seo.js';
import HeaderV2 from '../components/headerV2.js';

export default ({ data }) => {
  return (
    <SiteWrapper>
      <SEO title="Bio" />
      <HeaderV2 />
      <div className="row">
        <div className="col-6">
          {/* <p>Hello! I make things with sound and code.</p> */}
          <p>
            Hello! I make things with sound and code.{' '}
            {/* Through my work I aim to
            produce new ways of interfacing with and learning about sound and
            technology. */}
          </p>
          <p>
            I develop playful music-making interfaces that allow both seasoned
            musicians and people who have never worked with sound to create and
            learn about music in unique ways.
          </p>
          <p>
            With{' '}
            <a href="https://noncoreprojector.com" target="blank">
              NonCoreProjector
            </a>{' '}
            I work with web technologies and public APIs to expose how data is
            interconnected in both logical and illogical ways.
          </p>
          {/* <p>
            Check out{' '}
            <a href="https://noncoreprojector.com" target="blank">
              NonCoreProjector
            </a>{' '}
            for web-based art installations or listen to my band{' '}
            <a href="https://obstaclemusic.com" target="blank">
              Obstacle
            </a>
            's latest release.
          </p> */}
        </div>
        <div className="col-6">
          <p>
            Feel free to contact me at{' '}
            <span
              className="highlighted"
              style={{
                display: 'inline-block',
                padding: '0 3px',
                borderRadius: 2,
              }}
            >
              {'ejarz[at]pm.me'}
            </span>{' '}
          </p>
          <p>
            I am also on{' '}
            <a href="https://github.com/ejarzo/" target="blank">
              GitHub
            </a>
            ,{' '}
            <a href="https://jarz0.bandcamp.com/" target="blank">
              {' '}
              Bandcamp
            </a>
            ,{' '}
            <a
              href="https://open.spotify.com/artist/0Si7RnGwNEWeH1AhYgzyW4"
              target="blank"
            >
              {' '}
              Spotify
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/profile/view?id=AAIAABf1guIBOB8T0pedXQTO32b_DkZc_k93L6E&amp;trk=nav_responsive_tab_profile"
              target="blank"
            >
              LinkedIn
            </a>
            , and{' '}
            <a href="https://twitter.com/jarz_0" target="blank">
              Twitter
            </a>
            .
          </p>
        </div>
      </div>
    </SiteWrapper>
  );
};
