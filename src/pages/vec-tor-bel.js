import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "vec-tor-bel-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        invertedHeader
        title="Vec Tor Bel"
        bannerImage={bannerImage}
        links={[
          { label: 'Code', href: 'https://github.com/ejarzo/vec-tor-bel' },
          {
            label: 'Press Release',
            href:
              'https://static1.squarespace.com/static/58f3d8852e69cf9a78f98a6c/t/5be4657dc2241be6e98425d2/1541694846194/Press+Release+%7C+NonCoreProjector+%7C+Vec+Tor+Bel+.pdf',
          },
        ]}
        Content={() => (
          <div>
            <p className="MediaWrapper">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/302939221?color=eee"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </p>
          </div>
        )}
      />
    </div>
  );
};
