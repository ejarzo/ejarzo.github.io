import React, { useState } from 'react';
import SiteWrapper from '../components/SiteWrapper';
import SEO from '../components/seo.js';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import HeaderV2 from '../components/headerV2';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectLink = ({ title, href, info, to, isHovered, onMouseEnter }) => {
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
      onMouseEnter={() => onMouseEnter(to)}
      style={{
        marginBottom: '3em',
        // background: 'rgba(0, 0, 0, 0.4)',
        padding: 4,
        position: 'relative',
        textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
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
              fontWeight: 'bold',
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
            fontSize: '0.8em',
            textTransform: 'uppercase',
            opacity: 1,
            fontWeight: 'bold',
            textShadow: '0 0 1px 1px rgba(0,0,0,0.6)',
          }}
        >
          {info}
        </span>
      </Wrapper>
    </li>
  );
};

const IndexPage = () => {
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
    rltvBanner,
    traversalBanner,
    dwoBanner,
    kishkindhaBanner,
  } = useStaticQuery(graphql`
    query {
      triangleAnimationBanner: file(
        relativePath: { eq: "triangle-animation-banner-2.png" }
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
      rltvBanner: file(relativePath: { eq: "rltv/rltv-banner.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      traversalBanner: file(relativePath: { eq: "traversal/Traversal1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dwoBanner: file(relativePath: { eq: "dwo/dwo-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 3400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kishkindhaBanner: file(
        relativePath: { eq: "kishkindha/kishkindha-banner-transformed.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const links = [
    {
      title: 'Abacusynth (Hardware)',
      imgFluid: abacusynthHardwareBanner,
      info: 'Synthesizer, 2022',
      to: '/abacusynth-hardware',
    },
    {
      title: 'Kishkindha NY',
      imgFluid: kishkindhaBanner,
      info: 'Music for Dance, 2023',
      to: '/kishkindha-ny',
      imgAttribution: 'Photo by Ludovica Stecher',
    },
    {
      title: 'Traversal',
      imgFluid: traversalBanner,
      info: 'Generative Audio/Visual, 2023',
      to: '/traversal',
    },
    {
      title: 'Rec Lobe TV',
      imgFluid: rltvBanner,
      info: 'Multimedia Installation, 2022',
      to: '/rec-lobe-tv',
    },

    {
      title: 'Doors we Open',
      imgFluid: dwoBanner,
      info: 'Soundtrack, 2022',
      to: '/doors-we-open',
    },
    {
      title: 'Abacusynth (Plugin)',
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
      info: 'Web/Audio, 2016',
      to: '/shape-your-music',
    },
    {
      title: '◣',
      imgFluid: triangleAnimationBanner,
      info: 'Animation Experiment, 2020',
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
    // {
    //   title: 'Fiber',
    //   imgFluid: fiberBanner,
    //   info: 'Immersive Experience, 2017',
    //   to: '/fiber',
    //   belowFold: true,
    // },
  ];

  const [hoveredLink, setHoveredLink] = useState(links[0].to);
  const [showMore, setShowMore] = useState(false);
  const { imgAttribution } = links.find(l => l.to === hoveredLink) || {};

  return (
    <SiteWrapper>
      <SEO title="Projects" description="My latest works" />
      <HeaderV2 />

      <div className="ProjectsV2">
        <div className="Projects__ImgContainer">
          {links.map(({ title, imgFluid, to }, i) => (
            <div className="Projects__ImgContainer__ImgWrapper" key={title}>
              <Img
                className="background--full"
                fluid={imgFluid.childImageSharp.fluid}
                style={{
                  opacity: to === hoveredLink ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
        <div className="Projects__ImgAttribution">{imgAttribution}</div>
        <div className="Projects__List">
          <div>
            <ul>
              {links
                // .filter(({ belowFold }) => !belowFold)
                .map((linkInfo, i) => (
                  <ProjectLink
                    onMouseEnter={to => {
                      setHoveredLink(to);
                    }}
                    {...linkInfo}
                    isHovered={linkInfo.to === hoveredLink}
                    projectIndex={i}
                  />
                ))}
            </ul>
            {/* <button
              style={{
                border: '2px solid white',
                borderRadius: 2,
                background: 'none',
                cursor: 'pointer',
                padding: '10px 20px',
                color: 'white',
              }}
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              More
            </button> */}
            {showMore && (
              <ul style={{ marginTop: 50 }}>
                {links
                  .filter(({ belowFold }) => belowFold)
                  .map((linkInfo, i) => (
                    <ProjectLink {...linkInfo} projectIndex={i} />
                  ))}
              </ul>
            )}
            {/* <button>Show More</button> */}
          </div>
        </div>
      </div>
    </SiteWrapper>
  );
};

export default IndexPage;
