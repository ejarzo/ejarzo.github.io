import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

export default () => {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "drum-radar-banner-2.png" }) {
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
        title="Drum Radar"
        bannerImage={bannerImage}
        links={[
          { label: 'Visit Site', href: 'https://drum-radar.netlify.app' },
          {
            label: 'View Source',
            href: 'https://github.com/ejarzo/drum-radar',
          },
        ]}
        Content={() => (
          <div>
            <p>
              The{' '}
              <a href="https://drum-radar.netlify.app/" target="blank">
                Drum Radar
              </a>{' '}
              is a drum machine that visualizes rhythm as circles and spokes.
            </p>
            <p>
              <iframe
                title="Drum Radar Demo"
                src="https://player.vimeo.com/video/505089921?color=eae6de"
                width="100%"
                height="700"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              Each drum track plays at constant rate in a circle, ‘hitting’
              spokes as it passes to trigger its sample. For each drum sound you
              can control how big its radius is (how long the loop lasts) and
              how many divisions it has (how many times it will play during that
              loop). This allows for some interesting combinations of synced and
              freeform polyrhythms.
            </p>
          </div>
        )}
      />
    </div>
  );
};
