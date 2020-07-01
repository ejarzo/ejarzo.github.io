import React from 'react';

import SiteWrapper from '../components/SiteWrapper.js';
import trianglesGif from '../images/triangles_outline.gif';
import SEO from '../components/seo.js';

export default ({ data }) => {
  return (
    <SiteWrapper>
      <SEO title="Bio" />
      <div className="row" style={{ textAlign: 'center' }}>
        <img alt="" src={trianglesGif} height="200" />
      </div>
      <div className="row">
        <div className="col-6">
          <p>
            I am a developer and musician interested in creating art and
            interactive experiences with code, especially new ways of making and
            interfacing with music. Check out{' '}
            <a href="https://noncoreprojector.com" target="blank">
              NonCoreProjector
            </a>{' '}
            for web-based art installations.
          </p>
        </div>
        <div className="col-6">
          <p>
            Feel free to <a href="mailto:ejarz25@gmail.com">contact me</a>. I am
            also on{' '}
            <a href="https://github.com/ejarzo/" target="blank">
              Github
            </a>
            ,{' '}
            <a href="https://soundcloud.com/jarz0" target="blank">
              {' '}
              Soundcloud
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/profile/view?id=AAIAABf1guIBOB8T0pedXQTO32b_DkZc_k93L6E&amp;trk=nav_responsive_tab_profile"
              target="blank"
            >
              LinkedIn
            </a>
            ,{' '}
            <a href="https://medium.com/@eliasjarzombek" target="blank">
              Medium
            </a>
            , and occasionally{' '}
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
