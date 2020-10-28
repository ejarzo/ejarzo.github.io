import React, { useState } from 'react';
import SiteWrapper from '../components/SiteWrapper';
import ProjectLink from '../components/ProjectLink';
import SEO from '../components/seo.js';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const {
    vecTorBelBanner,
    verbolectBanner,
    symBanner,
    fiberBanner,
  } = useStaticQuery(graphql`
    query {
      vecTorBelBanner: file(relativePath: { eq: "vec-tor-bel-banner.jpg" }) {
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
  const imgs = [
    vecTorBelBanner.childImageSharp.fluid,
    verbolectBanner.childImageSharp.fluid,
    symBanner.childImageSharp.fluid,
    fiberBanner.childImageSharp.fluid,
  ];
  const [imgIndex, setImgIndex] = useState(0);
  const onMouseEnter = i => {
    setImgIndex(i);
  };

  const projects = [
    {
      title: 'Vec Tor Bel',
      info: 'Installation, 2018',
      to: '/vec-tor-bel',
    },
    {
      title: 'Verbolect',
      info: 'Installation, 2017',
      to: '/verbolect',
    },
    {
      title: 'Shape Your Music',
      info: 'Web/Audio, Ongoing',
      to: '/shape-your-music',
    },
    {
      title: 'Fiber',
      info: 'Immersive Experience, 2017',
      to: '/fiber',
    },
  ];
  return (
    <SiteWrapper>
      <SEO title="Projects" />
      <div className="ProjectsV2" style={{ padding: 5 }}>
        <div className="Projects__List" style={{ flexShrink: 1 }}>
          <div>
            {/* <h3>Installation</h3> */}
            <ul>
              {projects.map(({ title, info, to }, i) => (
                <Link to={to}>
                  <li
                    onMouseEnter={() => onMouseEnter(i)}
                    style={{ marginBottom: '2em' }}
                  >
                    <span>{title}</span>
                    <br />
                    <span style={{ fontSize: '0.7em', opacity: 0.7 }}>
                      {info}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* <div style={{ marginTop: '3em' }}>
            <h3>Digital</h3>
            <ul>
              <li onMouseEnter={() => onMouseEnter(0)}>
                <Link to="/vec-tor-bel">Vec Tor Bel (Installation, 2018)</Link>
              </li>
              <li onMouseEnter={() => onMouseEnter(1)}>
                <Link to="/verbolect">Verbolect (Installation, 2017)</Link>
              </li>
              <li onMouseEnter={() => onMouseEnter(2)}>
                <Link to="/shape-your-music">
                  Shape Your Music (Web/Audio, ongoing)
                </Link>
              </li>
              <li onMouseEnter={() => onMouseEnter(3)}>
                <Link to="/fiber">Fiber (Immersive experience, 2017)</Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div
          className="Projects__ImgContainer"
          style={{ padding: 20, flexGrow: 1, position: 'relative' }}
        >
          {/*  {imgIndex && (
            <Img
              style={{ boxShadow: '0 0 200px -40px rgba(0,0,0,0.4)' }}
              fluid={imgIndex}
            />
          )} */}

          {imgs.map((src, i) => (
            <Img
              style={{
                position: 'absolute',
                boxShadow: '0 0 200px -40px rgba(0,0,0,0.4)',
                top: 0,
                left: 20,
                width: 'calc(100% - 40px)',
                transition: 'all 0.4s',
                opacity: i === imgIndex ? 1 : 0,
                filter: `blur(${i === imgIndex ? '0px' : '10px'})`,
              }}
              fluid={src}
            />
          ))}
        </div>
        {/* <div className="Projects">
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
        </div> */}
      </div>
    </SiteWrapper>
  );
};
