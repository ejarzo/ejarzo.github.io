import React from 'react';
// import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import HeaderV2 from './headerV2.js';
import BackgroundImage from 'gatsby-background-image';

export default props => {
  const { title, links, Content, bannerImage } = props;
  const heroHeight = 420;

  return (
    <div>
      <SEO title={title} />
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
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Img
            fluid={bannerImage.childImageSharp.fluid}
            style={{
              userSelect: 'none',
              objectFit: 'cover',
              // filter: 'blur(100px) brightness(0.3)',
              filter: 'brightness(0.3)',
              opacity: 0.5,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>

      <div>
        <div
          className="SiteWrapper ProjectTitleWrapper"
          style={{ paddingTop: 50 }}
        >
          <HeaderV2 />
        </div>
        <BackgroundImage
          Tag="div"
          fluid={bannerImage.childImageSharp.fluid}
          style={{
            backgroundRepeat: 'none',
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className=" ProjectTitleWrapper"
            style={{
              minHeight: heroHeight,
              paddingTop: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 130px -20px rgba(247, 153, 33, 0.3)',
            }}
          >
            <h1
              style={{ margin: 0, maxWidth: 1000, marginBottom: 25 }}
              className="ProjectPage__Title"
            >
              {title}
            </h1>
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
        </BackgroundImage>
      </div>
      <div
        className="SiteWrapper"
        style={{ position: 'relative', zIndex: 1, marginTop: 30 }}
      >
        <div className="row">
          <div className="col-12">
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
