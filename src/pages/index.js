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
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      texturizerBanner: file(relativePath: { eq: "texturizer-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      tirthaBanner: file(relativePath: { eq: "tirtha-banner-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      musicalGardenBanner: file(
        relativePath: { eq: "musical-garden-banner-2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      drumRadarBanner: file(relativePath: { eq: "drum-radar-banner-2.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      additiveSynthBanner: file(
        relativePath: { eq: "additive-synth-banner-2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      vecTorBelBanner: file(relativePath: { eq: "vec-tor-bel-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      verbolectBanner: file(relativePath: { eq: "verbolect-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      symBanner: file(relativePath: { eq: "sym-banner-2.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      fiberBanner: file(relativePath: { eq: "fiber-screenshot.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      abacusynthBanner: file(relativePath: { eq: "abacusynth-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      punctureBanner: file(relativePath: { eq: "puncture-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      pendularBanner: file(relativePath: { eq: "pendular-banner-1.JPG" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      abacusynthPluginBanner: file(
        relativePath: { eq: "abcs-screenshot-1-wide-3.png" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      abacusynthHardwareBanner: file(
        relativePath: { eq: "abcs-hardware-banner.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      rltvBanner: file(relativePath: { eq: "rltv/rltv-banner.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      traversalBanner: file(relativePath: { eq: "traversal/Traversal1.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      dwoBanner: file(relativePath: { eq: "dwo/dwo-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      kishkindhaBanner: file(
        relativePath: { eq: "kishkindha/kishkindha-banner-transformed.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
              {/* <Img
                className="background--full"
                fluid={imgFluid.childImageSharp.fluid}
               
              /> */}
              <GatsbyImage
                loading={to === hoveredLink ? 'eager' : 'lazy'}
                className="background--full"
                image={imgFluid.childImageSharp.gatsbyImageData}
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  opacity: to === hoveredLink ? 1 : 0,
                }}
              />
              {/* <GatsbyImage
                loading={to === hoveredLink ? 'eager' : 'lazy'}
                className="background--full"
                image={imgFluid.childImageSharp.gatsbyImageData}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  filter: 'blur(10px) brightness(0.8)',
                  opacity: to === hoveredLink ? 1 : 0,
                  mask: `linear-gradient(90deg,
                  hsla(0, 0%, 0%, 0) 0%,
                  hsla(0, 0%, 0%, 0.9) 23%,
                  hsla(0, 0%, 0%, 0) 50%,
                  hsla(0, 0%, 0%, 0) 100%
                )`,
                }}
              /> */}
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
