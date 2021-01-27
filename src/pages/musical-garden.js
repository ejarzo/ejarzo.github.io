import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const { bannerImage, plantTypesImage, groundImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "musical-garden-banner-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plantTypesImage: file(
        relativePath: { eq: "musical-garden-plant-types.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      groundImage: file(relativePath: { eq: "musical-garden-ground.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <ProjectPage
        title="Musical Garden"
        bannerImage={bannerImage}
        links={[
          { label: 'Visit Site', href: 'https://musical-garden.netlify.app' },
          {
            label: 'View Source',
            href: 'https://github.com/ejarzo/musical-garden',
          },
        ]}
        Content={() => (
          <div>
            <p>
              The{' '}
              <a href="https://musical-garden.netlify.app/" target="blank">
                Musical Garden
              </a>{' '}
              is an experiment in making music by planting and tending to a
              virtual garden.
            </p>
            <p>
              <iframe
                title="Musical Garden Screencapture"
                src="https://player.vimeo.com/video/488997563?color=eae6de"
                width="100%"
                height="480"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              This web instrument allows you to make music by planting and
              watering different kinds of “audio seeds” that grow into lush
              melodies and textures. Watering the seeds causes them to grow both
              visually and sonically, and distinct areas in the garden cause the
              plants to behave in different ways.
            </p>
            <p>
              Composing using this interface is more spacial than linear. Plants
              emanate sound that you navigate through using the mouse, so moving
              through the space influences the mix of sounds.
            </p>
            <p>
              The implementation represents different types of sound using basic
              geometric forms and generates growth patterns algorithmically
              using{' '}
              <a href="https://en.wikipedia.org/wiki/L-system">L-Systems</a> — a
              technique for modeling generational systems. These patterns are at
              times also used to produce melodies.
            </p>
            <p>The musical garden invites exploration...</p>
            <h3>Plant Rules</h3>
            <p>
              <Img
                style={{ maxWidth: 400 }}
                fluid={plantTypesImage.childImageSharp.fluid}
                alt="Screenshot of four shapes: circle, square, equilateral triangle and right triangle"
              />
            </p>
            <p>
              Each seed type represents an oscillator waveform: circle = sine,
              square = square, equilateral triangle = triangle, right triangle =
              sawtooth. Each type has its own L-System rules for how to grow.
            </p>
            <h3>Ground Rules</h3>
            <p>
              Each ground area dictates how the plants should play audio. They
              define which synth the plant should use (incorporating the base
              oscillator type) and what to do when the plant is watered. They
              also attach audio effects specific to that area.
            </p>
            <p>
              <Img
                style={{ maxWidth: '100%' }}
                fluid={groundImage.childImageSharp.fluid}
                alt="Screenshot of musical garden ground showing five distinct areas"
              />
            </p>

            <p>
              Plants growing in the <strong>Brown/Purple Circles</strong>{' '}
              (bottom left) play melody based on the current L-System Sentence
              -- `[` means increase the note value and `]` means increase the
              note value. This means that shorter plants have shorter melodies.
            </p>
            <p>
              Plants growing in the <strong>Blue Squares</strong> (middle) each
              add a note to a sequence played left to right — the note value is
              determined by the Y position and the time is determined by the X
              position. Watering increases note duration and modulates the
              synth.
            </p>
            <p>
              Plants growing in the <strong>Red Diamonds</strong> (bottom
              middle) each loop one note on a random (within a set) interval —
              this generates polyrhythms between different plants. Watering
              increases the synths decay time and also randomizes the note.
            </p>
            <p>
              Each plant in the <strong>Brown/Yellow Triangles</strong> (right)
              adds a voice to a chord that changes at random intervals, so all
              plants in this area are playing one note of the same chord.
              Watering increases the filter frequency and adds delay once the
              plant has stopped growing.
            </p>
            <p>
              Each plant in the <strong>Black Squares (The Void)</strong> is
              assigned a random frequency. Watering adds vibrato and placing a
              plant changes the vibrato rate for the whole area.
            </p>
          </div>
        )}
      />
    </div>
  );
};
