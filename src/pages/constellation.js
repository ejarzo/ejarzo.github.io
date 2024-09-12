import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import ResponsiveIframe from '../components/ResponsiveIframe';

const Page = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(
        relativePath: { eq: "constellation/constellation-banner-2.png" }
      ) {
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
              Use the shape editor to create and perform your sequences. Edges
              represent notes, and the angles at each corner determine the
              musical interval between notes. Click on the keyboard to set the
              starting note, or play with MIDI. The color is purely aesthetic
              and is determined by the starting note.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default Page;
