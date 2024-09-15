import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import ResponsiveIframe from '../components/ResponsiveIframe';
import { GatsbyImage } from 'gatsby-plugin-image';

const Page = () => {
  const {
    bannerImage,
    image1,
    image2,
    image3,
    image4,
  } = useStaticQuery(graphql`
    {
      bannerImage: file(
        relativePath: { eq: "constellation/constellation-banner-2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "constellation/constellation-2.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: { eq: "constellation/constellation-3.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image4: file(relativePath: { eq: "constellation/constellation-4.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const bannerImageStaticUrl = bannerImage;

  return (
    <div>
      <ProjectPage
        title="Constellation"
        subtitle="Ableton Live Plugin, 2024"
        description="Constellation is an Ableton Live plugin for creating generative music"
        bannerImage={bannerImage}
        bannerImageStaticUrl={bannerImageStaticUrl}
        links={[
          {
            label: 'Download',
            href: 'https://eliasjarzombek.gumroad.com/l/constellation',
          },
          {
            label: 'User Guide',
            href: 'https://constellation.eliasjarzombek.com/',
          },
          // {
          //   label: 'View Source',
          //   href: 'https://github.com/ejarzo/abacusynth',
          // },
        ]}
        Content={() => (
          <div>
            <p>
              Constellation is a MIDI sequencer/arpeggiator for Ableton Live.
              Based on my project{' '}
              <a href="https://shapeyourmusic.dev/">Shape Your Music</a>, it
              allows you to compose melodies and harmonies by manipulating a
              polygon.
            </p>
            {/* youtube embed */}
            <ResponsiveIframe
              src="https://www.youtube.com/embed/oh9zTtGoyCw"
              title="Constellation"
              height="315"
            />
            <p>
              Use the shape editor to create and perform sequences. Edges
              represent notes, and the angles at each corner determine the
              musical interval between notes. Set the starting note by clicking
              on the keyboard, or with MIDI input.
            </p>
            <figure style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <GatsbyImage
                image={image3.childImageSharp.gatsbyImageData}
                alt="Constellation"
              />
            </figure>
            <p>
              Stack multiple devices in parallel to produce complex rhythms and
              harmonies. The color is purely aesthetic and is determined by the
              starting note.
            </p>
            <figure style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <GatsbyImage
                image={image4.childImageSharp.gatsbyImageData}
                alt="Constellation"
              />
            </figure>
            <p>
              Stacking multiple devices in series allows the first device's
              output to control the starting note of the next device. This
              allows for more evolving patterns.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default Page;
