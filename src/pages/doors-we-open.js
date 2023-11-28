import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ResponsiveIframe from '../components/ResponsiveIframe';

const DoorsWeOpenPage = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "dwo/dwo-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Doors We Open"
        subtitle="Sountrack, 2022"
        description=""
        bannerImage={bannerImage}
        links={[
          {
            label: 'Watch Trailer',
            href:
              'https://www.youtube.com/embed/u0dBarN3Zq0?si=XWpm3Ok28xu02e3',
          },
        ]}
        Content={() => (
          <div>
            <p>
              <em>Doors We Open</em> is an interactive short film created by{' '}
              <a href="https://www.kevinpeterhe.com/">Kevin Peter He</a> and{' '}
              <a href="https://jessicashen.com/index.html">Jessica Shen</a>.
            </p>
            <p>
              The film alternates between live action film and 3D gameplay to
              explore the relationship of an estranged father and daughter
              struggling to connect over generational trauma. The story uses the
              two mediums as a metaphor for the divide between how we present
              ourselves to family and our thoughts below the surface.{' '}
              <em>Doors We Open</em> is part of Tribeca Festival 2023.
            </p>
            <p>
              I contributed music and sound design for both live action and 3D
              gameplay.
            </p>

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/u0dBarN3Zq0?si=XWpm3Ok28xu02e3u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <ResponsiveIframe src="https://www.youtube.com/embed/u0dBarN3Zq0?si=XWpm3Ok28xu02e3"></ResponsiveIframe>
          </div>
        )}
      />
    </div>
  );
};

export default DoorsWeOpenPage;
