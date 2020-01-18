import React from 'react';
import SiteWrapper from '../components/SiteWrapper';
import ProjectLink from '../components/ProjectLink';
import SEO from '../components/seo.js';
import verbolectTile from '../images/tiles/verbolect-tile.gif';
import vectorbelTile from '../images/tiles/vec-tor-bel-tile.gif';
import symTile from '../images/tiles/sym-tile.gif';
import fiberTile from '../images/tiles/fiber-tile.gif';

export default () => (
  <SiteWrapper>
    <SEO title="Projects" />
    <div>
      <div className="row">
        <div className="col-4">
          <ProjectLink
            to="/vec-tor-bel"
            label="Vec Tor Bel"
            imgSrc={vectorbelTile}
          />
        </div>
        <div className="col-4">
          <ProjectLink
            to="/verbolect"
            label="Verbolect"
            imgSrc={verbolectTile}
          />
        </div>
        <div className="col-4">
          <ProjectLink
            to="/shape-your-music"
            label="Shape Your Music"
            imgSrc={symTile}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <ProjectLink to="/fiber" label="Fiber" imgSrc={fiberTile} />
        </div>
        {/* <ul>
          <li>
            <a href="#xenomod">
              <div className="square transparent">
              </div>
              <span>The Xenomod</span>
            </a>
          </li>

          <li>
            <a href="#music">
              <div className="square">
              </div>
              <span>Recorded Music</span>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </SiteWrapper>
);
