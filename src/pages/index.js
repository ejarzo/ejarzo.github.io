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
    abacusynthBanner,
    punctureBanner,
    pendularBanner,
    abacusynthPluginBanner,
    abacusynthHardwareBanner,
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
      abacusynthBanner: file(relativePath: { eq: "abacusynth-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      punctureBanner: file(relativePath: { eq: "puncture-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pendularBanner: file(relativePath: { eq: "pendular-banner-1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      abacusynthPluginBanner: file(
        relativePath: { eq: "abcs-screenshot-1-wide-3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      abacusynthHardwareBanner: file(
        relativePath: { eq: "abcs-hardware-banner.jpeg" }
      ) {
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
      title: 'Abacusynth (Hardware)',
      imgFluid: abacusynthHardwareBanner,
      info: 'Synthesizer, 2022',
      to: '/abacusynth-hardware',
    },
    {
      title: 'Abacusynth (Ableton Plugin)',
      imgFluid: abacusynthPluginBanner,
      info: 'Max for Live Plugin, 2022',
      to: '/abacusynth-plugin',
    },
    {
      title: 'Pendular',
      imgFluid: pendularBanner,
      info: 'Collaborative Performance/Musical Interface, 2021',
      to: '/pendular',
    },
    {
      title: 'Puncture',
      imgFluid: punctureBanner,
      info: 'Collaborative Performance/Musical Interface, 2021',
      to: '/puncture',
    },
    {
      title: 'Abacusynth (Web)',
      imgFluid: abacusynthBanner,
      info: 'Web/Audio, 2021',
      to: '/abacusynth',
    },
    {
      title: 'Tirtha: An Architectural Opera',
      imgFluid: tirthaBanner,
      info: 'Album/Multimedia, 2020',
      to: '/tirtha',
      imgAttribution: 'Image by Office of Uncertainty Research',
    },
    {
      title: 'Musical Garden',
      imgFluid: musicalGardenBanner,
      info: 'Web/Audio, 2020',
      to: '/musical-garden',
    },
    {
      title: 'Shape Your Music',
      imgFluid: symBanner,
      info: 'Web/Audio, Ongoing',
      to: '/shape-your-music',
    },
    {
      title: '◣',
      imgFluid: triangleAnimationBanner,
      info: 'Animation, 2020',
      to: '/triangle-animation',
      belowFold: true,
    },
    {
      title: 'Texturizer',
      imgFluid: texturizerBanner,
      info: 'Web/Generative, 2020',
      to: '/texturizer',
      belowFold: true,
    },
    {
      title: 'Drum Radar',
      imgFluid: drumRadarBanner,
      info: 'Web/Audio, 2020',
      to: '/drum-radar',
      belowFold: true,
    },
    {
      title: 'Web Synthesizer',
      imgFluid: additiveSynthBanner,
      info: 'Web/Audio, 2020',
      to: '/web-synthesizer',
      belowFold: true,
    },
    {
      title: 'Vec Tor Bel',
      imgFluid: vecTorBelBanner,
      info: 'Installation, 2018',
      to: '/vec-tor-bel',
      imgAttribution: 'Photo courtesy of False Flag Gallery',
    },
    {
      title: 'Verbolect',
      imgFluid: verbolectBanner,
      info: 'Installation, 2017',
      to: '/verbolect',
      imgAttribution: 'Photo courtesy of Pierogi Gallery',
    },
    {
      title: 'Fiber',
      imgFluid: fiberBanner,
      info: 'Immersive Experience, 2017',
      to: '/fiber',
      belowFold: true,
    },
  ];

  const ProjectLink = ({ title, href, info, to, projectIndex }) => {
    const isHovered = projectIndex === imgIndex;
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
        onMouseEnter={() => onMouseEnter(projectIndex)}
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
  };

  return (
    <SiteWrapper>
      <SEO title="Projects" />

      <HeaderV2 />

      <div className="ProjectsV2">
        <div className="Projects__ImgContainer">
          {links.map(({ title, imgFluid }, i) => (
            <div className="Projects__ImgContainer__ImgWrapper" key={title}>
              <Img
                className="background--full"
                fluid={imgFluid.childImageSharp.fluid}
                style={{
                  opacity: i === imgIndex ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
        <div className="Projects__ImgAttribution">
          {links[imgIndex].imgAttribution}
        </div>
        <div className="Projects__List">
          <div>
            <ul>
              {links.map((linkInfo, i) => (
                <ProjectLink {...linkInfo} projectIndex={i} />
              ))}
            </ul>
            {/* <button>Show More</button> */}
          </div>
        </div>
      </div>
    </SiteWrapper>
  );
};
