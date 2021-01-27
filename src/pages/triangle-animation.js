import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const { bannerImage, plantTypesImage, groundImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(
        relativePath: { eq: "triangle-animation-banner-2.png" }
      ) {
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
        title="◣"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Watch on Vimeo',
            href: 'https://vimeo.com/video/483319830',
          },
        ]}
        Content={() => (
          <div>
            <p>
              This animated short tells the story of a ◣ who navigates a
              geometric world with the help of some friends.
            </p>
            <p>
              It was primarily an exercise in learning the basics of animation
              using After Effects.
            </p>
            <p>
              <iframe
                title="Triangle Animation"
                src="https://player.vimeo.com/video/483319830?color=eae6de"
                width="100%"
                height="480"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
          </div>
        )}
      />
    </div>
  );
};
