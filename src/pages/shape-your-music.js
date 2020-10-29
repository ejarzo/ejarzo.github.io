import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import starWarsVideo from '../video/sym-star-wars.mp4';

export default () => {
  const { bannerImage, screenshotImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "sym-banner-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshotImage: file(relativePath: { eq: "sym-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <ProjectPage
        invertedHeader
        title="Shape Your Music"
        bannerImage={bannerImage}
        links={[
          { label: 'Demo', href: 'https://shapeyourmusic.dev' },
          { label: 'Code', href: 'https://github.com/ejarzo/Shape-Your-Music' },
        ]}
        Content={() => (
          <div>
            <p>
              Featured in{' '}
              <a
                href="https://www.webaudioweekly.com/106"
                target="blankhttps://www.webaudioweekly.com/106"
              >
                Web Audio Weekly
              </a>
            </p>
            <p>
              Shape Your Music is a geometric sequencer that suggests one answer
              to the question "What does a shape sound like?". The result is
              something like a musical{' '}
              <a href="https://en.wikipedia.org/wiki/Geoboard" target="blank">
                geoboard
              </a>{' '}
              where edges represent notes, and angles represent the intervals
              between those notes. Wondering how it sounds?{' '}
              <a href="https://shapeyourmusic.dev/" target="blank">
                Try it yourself!
              </a>
            </p>
            <p className="MediaWrapper">
              <Img
                backgroundColor={'none'}
                fluid={screenshotImage.childImageSharp.fluid}
                style={{ borderRadius: 2 }}
              />
            </p>

            <h3>Features</h3>
            <p>
              <ul>
                <li>Draw multiple shapes to generate unique polyrhythms</li>
                <li>Manipulate shapes in real time to improvise and perform</li>
                <li>
                  Experiment with different musical modes, keys, and tempos
                </li>
                <li>
                  Use grid and syncing options to create defined rhythms and
                  loops
                </li>
                <li>
                  Move shapes up or down to transpose them within the scale, or
                  side to side to move them in stereo space
                </li>
                <li>Change and adjust the sound that each color produces</li>
                <li>
                  Record and export your project as either an audio file or as
                  MIDI files
                </li>
                <li>Save projects and browse other people's creations</li>
              </ul>
            </p>

            <h3>How it Works</h3>
            <p>
              Melodic loops are created by drawing shapes. When a shape plays, a
              node traverses the perimeter of the shape at a constant speed,
              sounding a note at each vertex. Thus each edge represents a note.
              The first note of a shape is determined by the shape's y position
              on the plane. The note for each subsequent edge is determined by
              the angle between that edge and the previous edge. This angle
              determines the musical interval between the two notes. For
              example: A sharp left turn means that the next note is much higher
              than the previous, while a shallow right turn means that the next
              note is a little lower. When the last point is reached, the loop
              starts again.
            </p>
            <p>To demonstrate, here is the Star Wars Theme in shape form:</p>
            <p className="MediaWrapper">
              <video controls style={{ width: '100%' }}>
                <source src={starWarsVideo} type="video/mp4" />
              </video>
            </p>
            <p>
              <a href="https://shapeyourmusic.dev/" target="blank">
                Try it yourself
              </a>{' '}
              or{' '}
              <a
                href="https://github.com/ejarzo/Shape-Your-Music"
                target="blank"
              >
                view the source
              </a>
              .
            </p>
          </div>
        )}
      />
    </div>
  );
};
