import React from 'react';
import SiteWrapper from '../components/SiteWrapper';
import ProjectLink from '../components/ProjectLink';
import SEO from '../components/seo.js';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const {
    vecTorBelBanner,
    verbolectBanner,
    symBanner,
    fiberBanner,
  } = useStaticQuery(graphql`
    query {
      vecTorBelBanner: file(relativePath: { eq: "vec-tor-bel3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verbolectBanner: file(relativePath: { eq: "verbolect-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      symBanner: file(relativePath: { eq: "sym-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fiberBanner: file(relativePath: { eq: "fiber-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SiteWrapper>
      <SEO title="Projects" />
      <div style={{ padding: 5 }}>
        <div className="Projects">
          <div className="ProjectLink">
            <ProjectLink
              to="/vec-tor-bel"
              label="Vec Tor Bel"
              imgSrc={vecTorBelBanner.childImageSharp.fluid}
            />
          </div>
          <div className="ProjectLink">
            <ProjectLink
              to="/verbolect"
              label="Verbolect"
              imgSrc={verbolectBanner.childImageSharp.fluid}
            />
          </div>
          <div className="ProjectLink">
            <ProjectLink
              to="/shape-your-music"
              label="Shape Your Music"
              imgSrc={symBanner.childImageSharp.fluid}
            />
          </div>
          <div className="ProjectLink">
            <ProjectLink
              to="/fiber"
              label="Fiber"
              imgSrc={fiberBanner.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </SiteWrapper>
  );
};
