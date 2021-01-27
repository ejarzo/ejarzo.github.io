import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "additive-synth-banner-2.png" }) {
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
        title="Web Synthesizer"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Play V1',
            href: 'https://additive-synth.netlify.app',
          },
          {
            label: 'Play V2',
            href: 'https://deploy-preview-1--additive-synth.netlify.app/',
          },
          {
            label: 'View Source',
            href: 'https://github.com/ejarzo/additive-synth',
          },
        ]}
        Content={() => (
          <div>
            <h3>Iteration 1</h3>
            <p>
              This{' '}
              <a href="https://additive-synth.netlify.app">
                Web-based Synthesizer
              </a>{' '}
              allows you to experiment with timbre in the browser. It consists
              of four oscillators and one noise source, each routed to its own
              amplitude envelope. Oscillator 1 also controls the overall
              envelope - all other oscillators (including noise) are routed
              through Oscillator 1.
            </p>
            <p>
              <iframe
                title="Triangle Animation"
                src="https://player.vimeo.com/video/505003030?color=eae6de"
                width="100%"
                height="520"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              I wanted to replicate one of my favorite features of synths like
              Ableton’s{' '}
              <a href="https://www.ableton.com/en/packs/operator/">Operator</a>—
              the ability to loop envelopes, letting you create detailed
              rhythmic textures. In addition to the base harmonic, volume,
              detune, wave type (sine, triangle, square, or sawtooth) and ADSR
              envelope, each oscillator also has a loop control, which
              determines the interval at which the envelope repeats.
            </p>
            <p>
              Since the focus was on timbre, I only added limited options for
              controlling the notes being played. The synth plays a sequence of
              7th chord arpeggios in a set scale that can be changed by moving
              the mouse left and right. You can also change the octave by
              pressing Z and X. There are three “voices” meaning that three
              notes can be played at the same time.
            </p>

            <h3>Iteration 2</h3>
            <p>
              In{' '}
              <a href="https://deploy-preview-1--additive-synth.netlify.app/">
                an alternate version
              </a>{' '}
              I added visualization and control over the synth’s tuning. Each
              oscillator’s waveform is graphed in a circle. Since all
              oscillators route through the first oscillator, the top left graph
              represents the sum of all four - the output waveform.
            </p>
            <p>
              <iframe
                title="Triangle Animation"
                src="https://player.vimeo.com/video/468989364?color=eae6de"
                width="100%"
                height="520"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              You can control three synth voices to make chords and switch
              between{' '}
              <a href="https://pages.mtu.edu/~suits/scales.html">
                Just and Equal temperaments
              </a>{' '}
              to see and hear how they are different. It is especially
              noticeable on the tonic chord, in this case A Major. There are
              audible pulses with Equal temperament, whereas Just temperament
              produces a smooth harmony. You can clearly see this in the graphs
              as they go from fluctuating to very even.
            </p>
          </div>
        )}
      />
    </div>
  );
};
