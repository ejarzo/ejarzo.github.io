import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';

const Page = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(
        relativePath: { eq: "triangle-animation-banner-2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <div>
      <ProjectPage
        title="◣"
        description="An experiment in animation"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Watch on Vimeo',
            href: 'https://vimeo.com/483319830',
          },
        ]}
        Content={() => (
          <div>
            <p>
              This animated short tells the story of a ◣ who navigates a
              geometric world with the help of some friends.
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

export default Page;
