import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const {
    bannerImage,
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
  } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "texturizer-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot1: file(relativePath: { eq: "texturizer-screenshots/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot2: file(relativePath: { eq: "texturizer-screenshots/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot3: file(relativePath: { eq: "texturizer-screenshots/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot4: file(relativePath: { eq: "texturizer-screenshots/4.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot5: file(relativePath: { eq: "texturizer-screenshots/5.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot6: file(relativePath: { eq: "texturizer-screenshots/6.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <ProjectPage
        title="Texturizer"
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
              <a href="https://texturizer.netlify.app/" target="blank">
                Texturizer
              </a>{' '}
              is a program that generates moving textures from random stock
              images.
            </p>
            <p>
              <iframe
                title="Texturizer Screencapture"
                src="https://player.vimeo.com/video/478046644?color=eae6de"
                width="100%"
                height="700"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
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
              <Img
                fluid={screenshot1.childImageSharp.fluid}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <Img
                fluid={screenshot2.childImageSharp.fluid}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <Img
                fluid={screenshot3.childImageSharp.fluid}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <Img
                fluid={screenshot4.childImageSharp.fluid}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <Img
                fluid={screenshot5.childImageSharp.fluid}
                alt="screenshot of texturizer"
              />
            </p>
            <p>
              <Img
                fluid={screenshot6.childImageSharp.fluid}
                alt="screenshot of texturizer"
              />
            </p>
          </div>
        )}
      />
    </div>
  );
};
