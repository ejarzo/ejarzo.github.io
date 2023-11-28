import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ResponsiveIframe from '../components/ResponsiveIframe';

const TraversalPage = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "traversal/Traversal1.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Traversal"
        subtitle="Generative Audio/Visual, 2023"
        description=""
        bannerImage={bannerImage}
        links={[
          {
            label: 'View Exhibition',
            href: 'https://unitlondon.com/voices/sonic-alchemy/',
          },
        ]}
        Content={() => (
          <div>
            <p>
              <em>Traversal</em> is a series of four generative audio/visual
              works, part of the{' '}
              <a href="https://unitlondon.com/voices/sonic-alchemy/">
                Sonic Alchemy
              </a>{' '}
              exhibition at Unit London.
            </p>
            <p>
              For this piece I built a system that turns random stock photos
              into landscapes and soundscapes. I wanted to see how differences
              in imagery could translate into differences in music. My goal was
              to reach a point where it seemed like the algorithm had a mind of
              its own, and could fully explore the sonic palette provided to it.
              I enjoy finding multiple ways to interpret the same data, and in
              this piece the image data drives all visual and sonic variations.
              Some of these transformations are direct while others are quite
              circuitous. This process of using one medium to create another
              results in emergent patterns that might otherwise be impossible to
              reach.
            </p>
            <p class="mediaWrapper" style={{ maxWidth: 800 }}>
              <video
                style={{ width: '100%', borderRadius: 8 }}
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/unit-london/video/upload/v1690535874/EliasJarzombek_Traversal-0166777.mp4?_i=AA"
                controls
              />
              <figcaption>Traversal 01 (unmute for sound)</figcaption>
            </p>
            <p>
              The visuals operate by painting strokes of colors based on the
              original image. Starting at their original position, they move,
              expand, and contract based on the properties of color (for example
              brighter colors move faster) as well as the user's mouse position.
            </p>
            <p class="mediaWrapper" style={{ maxWidth: 800 }}>
              <video
                style={{ width: '100%', borderRadius: 8 }}
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/unit-london/video/upload/v1690536167/EliasJarzombek_Traversal-0266779.mp4?_i=AA"
                controls
              />
              <figcaption>Traversal 02 (unmute for sound)</figcaption>
            </p>

            <p>
              To generate sound, some of these brush paths are selected as sonic
              controllers, each mapped to a certain sound or instrument based on
              their starting color. As they traverse the image in two
              dimensions, they move over pixels from the original image. The
              pixel data is transformed in real time into notes, effects, and
              timbral adjustments.
            </p>
            <p class="mediaWrapper" style={{ maxWidth: 800 }}>
              <video
                style={{ width: '100%', borderRadius: 8 }}
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/unit-london/video/upload/v1690537041/EliasJarzombek_Traversal-0366781.mp4?_i=AA"
                controls
              />
              <figcaption>Traversal 03 (unmute for sound)</figcaption>
            </p>

            <p>
              In addition, the image's dominant colors are interpreted as looped
              sequences of notes, whose presence in the mix is determined by
              another set of traversing brush paths.
            </p>
            <p class="mediaWrapper" style={{ maxWidth: 800 }}>
              <video
                style={{ width: '100%', borderRadius: 8 }}
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/unit-london/video/upload/v1690533940/EliasJarzombek_Traversal-0466794.mp4?_i=AA"
                controls
              />
              <figcaption>Traversal 04 (unmute for sound)</figcaption>
            </p>
            <p>
              The code runs in the browser, and includes to custom synthesizer
              code that I made with RNBO, the Max/MSP tool for building for
              multiple platforms.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default TraversalPage;
