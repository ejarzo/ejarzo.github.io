import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

const AbacusynthPage = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "abacusynth-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Abacusynth (Web)"
        subtitle="Web Synthesizer, 2021"
        description="A web synthesizer inspired by an abacus"
        bannerImage={bannerImage}
        links={[
          { label: 'Visit Site', href: 'https://abacusynth.netlify.app' },
          {
            label: 'View Source',
            href: 'https://github.com/ejarzo/abacusynth',
          },
        ]}
        Content={() => (
          <div>
            <p>
              The{' '}
              <a href="https://abacusynth.netlify.app/" target="blank">
                Abacusynth
              </a>{' '}
              is a synth inspired by an{' '}
              <a href="https://en.wikipedia.org/wiki/Abacus" target="blank">
                abacus
              </a>
              .
            </p>
            <p className="MediaWrapper">
              <div style={{ padding: '79% 0 0 0', position: 'relative' }}>
                <iframe
                  title="Abacusynth Demo"
                  src="https://player.vimeo.com/video/517974442?color=eae6de"
                  width="100%"
                  height="700"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </p>
            <p>
              The interaction is centered on placing shapes on rods. Each rod is
              set to a frequency in the harmonic series, and each shape
              represents an oscillator oscillating at that frequency. The
              different shapes represent the oscillator's wave type (sine,
              square, triangle, sawtooth).
            </p>
            <h3>How to use</h3>
            <p>
              Place shapes on the rods to start producing sound. Shapes on the
              lowest rod produce the fundamental frequency. You can change the
              note by pressing the keys `asdfghjk`. Drag shapes will move them
              from left to right or from rod to rod. If holding the ALT or
              OPTION key on your keyboard, dragging a shape adjusts it's vibrato
              rate (dragging up/down) and depth(dragging right/left). This will
              cause the shape to move on the rod. If holding the SHIFT key,
              dragging adjusts the shape's size panning speed which correspond
              to the sound's volume and panning speed, respectively. Click
              "Randomize" will clear the current state and randomly generate
              shapes.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default AbacusynthPage;
