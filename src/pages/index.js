import React, { useState } from 'react';
import SiteWrapper from '../components/SiteWrapper';
import SEO from '../components/seo.js';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import HeaderV2 from '../components/headerV2';

export default () => {
  const {
    vecTorBelBanner,
    verbolectBanner,
    symBanner,
    fiberBanner,
    musicalGardenBanner,
    tirthaBanner,
    texturizerBanner,
    drumRadarBanner,
    additiveSynthBanner,
    triangleAnimationBanner,
  } = useStaticQuery(graphql`
    query {
      triangleAnimationBanner: file(
        relativePath: { eq: "triangle-animation-banner.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      texturizerBanner: file(relativePath: { eq: "texturizer-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tirthaBanner: file(relativePath: { eq: "tirtha-banner-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      musicalGardenBanner: file(
        relativePath: { eq: "musical-garden-banner-2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      drumRadarBanner: file(relativePath: { eq: "drum-radar-banner-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      additiveSynthBanner: file(
        relativePath: { eq: "additive-synth-banner-2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vecTorBelBanner: file(relativePath: { eq: "vec-tor-bel-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verbolectBanner: file(relativePath: { eq: "verbolect-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      symBanner: file(relativePath: { eq: "sym-banner-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fiberBanner: file(relativePath: { eq: "fiber-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [imgIndex, setImgIndex] = useState(0);
  const onMouseEnter = i => {
    setImgIndex(i);
  };

  const links = [
    {
      title: 'Tirtha: An Architectural Opera',
      imgFluid: tirthaBanner.childImageSharp.fluid,
      info: 'Album, 2020',
      to: '/tirtha',
      imgAttribution: 'Image by Office of Uncertainty Research',
    },
    {
      title: 'Musical Garden',
      imgFluid: musicalGardenBanner.childImageSharp.fluid,
      info: 'Web/Audio, 2020',
      to: '/musical-garden',
    },
    {
      title: 'Shape Your Music',
      imgFluid: symBanner.childImageSharp.fluid,
      info: 'Web/Audio, Ongoing',
      to: '/shape-your-music',
    },
    {
      title: '◣',
      imgFluid: triangleAnimationBanner.childImageSharp.fluid,
      info: 'Animation, 2020',
      to: '/triangle-animation',
    },
    {
      title: 'Texturizer',
      imgFluid: texturizerBanner.childImageSharp.fluid,
      info: 'Web/Generative, 2020',
      to: '/texturizer',
    },
    {
      title: 'Drum Radar',
      imgFluid: drumRadarBanner.childImageSharp.fluid,
      info: 'Web/Audio, 2020',
      to: '/drum-radar',
    },
    {
      title: 'Web Synthesizer',
      imgFluid: additiveSynthBanner.childImageSharp.fluid,
      info: 'Web/Audio, 2020',
      to: '/web-synthesizer',
    },
    {
      title: 'Vec Tor Bel',
      imgFluid: vecTorBelBanner.childImageSharp.fluid,
      info: 'Installation, 2018',
      to: '/vec-tor-bel',
      imgAttribution: 'Photo courtesy of False Flag Gallery',
    },
    {
      title: 'Verbolect',
      imgFluid: verbolectBanner.childImageSharp.fluid,
      info: 'Installation, 2017',
      to: '/verbolect',
      imgAttribution: 'Photo courtesy of Pierogi Gallery',
    },
    {
      title: 'Fiber',
      imgFluid: fiberBanner.childImageSharp.fluid,
      info: 'Immersive Experience, 2017',
      to: '/fiber',
    },
  ];

  return (
    <SiteWrapper>
      <SEO title="Projects" />

      <HeaderV2 />

      <div className="ProjectsV2">
        <div
          className="Projects__ImgContainer"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none',
            // background: '#222',
          }}
        >
          {links.map(({ title, imgFluid }, i) => (
            <div
              key={title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Img
                className="background--full"
                fluid={imgFluid}
                style={{
                  userSelect: 'none',
                  objectFit: 'cover',
                  // filter: 'blur(0px)',
                  // filter: 'brightness(0.8)',
                  transition: 'opacity 1s',
                  width: '100%',
                  height: '100%',
                  opacity: i === imgIndex ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'fixed',
            textTransform: 'uppercase',
            bottom: 2,
            right: 4,
            fontSize: '0.5em',
            opacity: 0.9,
          }}
        >
          {links[imgIndex].imgAttribution}
        </div>
        <div className="Projects__List">
          <div>
            <ul>
              {links.map(({ title, info, to, href }, i) => {
                const isHovered = i === imgIndex;
                const Wrapper = ({ children }) =>
                  to ? (
                    <Link style={{ display: 'inline-block' }} to={to}>
                      {children}
                    </Link>
                  ) : (
                    <a
                      style={{ display: 'inline-block' }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  );

                return (
                  <li
                    key={title}
                    onMouseEnter={() => onMouseEnter(i)}
                    style={{
                      marginBottom: '2em',
                      // background: 'rgba(0, 0, 0, 0.4)',
                      padding: 4,
                      position: 'relative',
                      textShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <Wrapper>
                      {isHovered && (
                        <h2
                          style={{
                            margin: 0,
                            position: 'absolute',
                            left: -28,
                            fontFamily: 'Source Serif Pro',
                          }}
                        >
                          {'>'}
                        </h2>
                      )}
                      <h2
                        style={{
                          margin: 0,
                          fontWeight: 'bold',
                          fontFamily: 'Source Serif Pro',
                          textShadow: '0 0 20px 20px rgba(0,0,0,0.1)',
                        }}
                      >
                        {title}
                      </h2>
                      <span
                        style={{
                          fontSize: '0.7em',
                          textTransform: 'uppercase',
                          opacity: 1,
                          fontWeight: '0 !important',
                        }}
                      >
                        {info}
                      </span>
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </SiteWrapper>
  );
};
