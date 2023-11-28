import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Page = () => {
  const {
    bannerImage,
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
  } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "texturizer-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      screenshot1: file(relativePath: { eq: "texturizer-screenshots/1.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      screenshot2: file(relativePath: { eq: "texturizer-screenshots/2.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      screenshot3: file(relativePath: { eq: "texturizer-screenshots/3.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      screenshot4: file(relativePath: { eq: "texturizer-screenshots/4.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      screenshot5: file(relativePath: { eq: "texturizer-screenshots/5.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
      screenshot6: file(relativePath: { eq: "texturizer-screenshots/6.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <div>
      <ProjectPage
        title="Texturizer"
        description="A site that generates moving textures from random stock images"
        bannerImage={bannerImage}
        links={[
          { label: 'Visit Site', href: 'https://texturizer.netlify.app' },
          {
            label: 'View Source',
            href: 'https://github.com/ejarzo/texturizer',
          },
        ]}
        Content={() => (
          <div>
            <p>
              <a href="https://texturizer.eliasjarzombek.com/" target="blank">
                Texturizer
              </a>{' '}
              is a program that generates moving textures from random stock
              images.
            </p>
            <iframe
              title="Texturizer Screencapture"
              src="https://player.vimeo.com/video/478046644?color=eae6de"
              width="100%"
              height="700"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
            <p>
              It uses the{' '}
              <a href="https://source.unsplash.com/random">
                Unsplash random endpoint
              </a>{' '}
              to fetch a source image and then begins “painting” based on that
              picture. The color of pixels in the original image determine the
              size and speed of the "brush". Faint white lines connect pixels of
              extreme color (high red but low blue and green for example).
              Sometimes the result might resemble a modern abstract painting,
              other times it looks more like an early 2000s screen-saver.
              ¯\_(ツ)_/¯
            </p>
            <p>
              <GatsbyImage
                image={screenshot1.childImageSharp.gatsbyImageData}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <GatsbyImage
                image={screenshot2.childImageSharp.gatsbyImageData}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <GatsbyImage
                image={screenshot3.childImageSharp.gatsbyImageData}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <GatsbyImage
                image={screenshot4.childImageSharp.gatsbyImageData}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <GatsbyImage
                image={screenshot5.childImageSharp.gatsbyImageData}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <GatsbyImage
                image={screenshot6.childImageSharp.gatsbyImageData}
                alt="screenshot of texturizer"
              />
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default Page;
