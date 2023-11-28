import React from 'react';
// import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import HeaderV2 from './headerV2.js';
import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectPage = props => {
  const { title, subtitle, links, Content, bannerImage, description } = props;
  const heroHeight = 420;

  return (
    <div className="ProjectPage">
      <SEO
        title={title}
        description={description}
        // image={bannerImage.childImageSharp.fluid.src}
      />
      <div>
        <div
          // className="SiteWrapper ProjectTitleWrapper"
          style={{
            paddingTop: 50,
            position: 'absolute',
            zIndex: 4,
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <div className="SiteWrapper ProjectTitleWrapper">
            <HeaderV2 />
          </div>
        </div>
        <div
          style={{
            height: 100,
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            // backgroundColor: 'rgba(0,0,0,0.8)',
            mask: 'linear-gradient(180deg, black 30%,  transparent 100%)',
            backdropFilter: 'blur(40px) brightness(0.9)',
          }}
        ></div>
        <div className="HeroImageWrapper">
          <div style={{ height: 850, position: 'relative' }}>
            <GatsbyImage
              loading="eager"
              image={bannerImage.childImageSharp.gatsbyImageData}
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 1,
                height: 850,
                backgroundRepeat: 'none',
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            />
            <GatsbyImage
              image={bannerImage.childImageSharp.gatsbyImageData}
              style={{
                position: 'absolute',
                zIndex: 2,
                height: '100%',
                width: '100%',
                backgroundRepeat: 'none',
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                filter: 'blur(20px)',
                mask: `linear-gradient(180deg,
                  hsl(0, 0%, 0%) 0%,
                  hsl(0, 0%, 0%) 15%,
                  hsla(0, 0%, 0%, 0) 30%,
                  hsla(0, 0%, 0%, 0) 65%,
                  hsl(0, 0%, 0%) 100%
                )`,
              }}
            />
          </div>
        </div>
        <div
          className="ProjectTitleWrapper"
          style={{
            position: 'relative',
            zIndex: 3,
            margin: '0 auto',
            marginTop: -260,
            // minHeight: heroHeight,
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            maxWidth: '720px',
            // boxShadow: '0 20px 130px -20px rgba(247, 153, 33, 0.3)',
          }}
        >
          <h1 style={{ margin: 0 }} className="ProjectPage__Title">
            {title}
          </h1>
          {subtitle && (
            <span
              style={{
                fontSize: '0.8em',
                textTransform: 'uppercase',
                opacity: 1,
                fontWeight: 'bold',
                opacity: 0.8,
              }}
            >
              {subtitle}
            </span>
          )}
          {links && (
            <div>
              <div className="ProjectPage__Links">
                {links.map(({ label, href, isPrimary }, i) => (
                  <a
                    className={`btn ${isPrimary ? 'btn--primary' : ''}`}
                    key={label}
                    href={href}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        // className="SiteWrapper"
        style={{ position: 'relative', zIndex: 1, marginTop: 0 }}
      >
        <div className="row">
          <div className="col-12" style={{ marginTop: 0 }}>
            {Content && (
              <div>
                <Content />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProjectPage;
