import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Img from 'gatsby-image';
import SEO from '../components/seo';

export default props => {
  const { title, links, Content, invertedHeader, bannerImage } = props;

  return (
    <div>
      <SEO title={title} />
      {bannerImage && (
        <Img
          fluid={bannerImage.childImageSharp.fluid}
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: 400,
          }}
        />
      )}
      <div>
        <Header inverted={invertedHeader} />
        <div
          className="SiteWrapper ProjectTitleWrapper"
          style={{ height: 400 - 26 }}
        >
          <h1 className="ProjectPage__Title">{title}</h1>
        </div>
      </div>
      <div
        className="SiteWrapper"
        style={{ position: 'relative', zIndex: 1, marginTop: 30 }}
      >
        <div className="row">
          <div className="col-12">
            {links && (
              <div>
                <div className="ProjectPage__Links">
                  {links.map(({ label, href }, i) => (
                    <a key={label} href={href} target="blank">
                      {label} {'->'} <br />
                    </a>
                  ))}
                </div>
              </div>
            )}
            {Content && (
              <div>
                <Content />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
