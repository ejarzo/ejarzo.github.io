import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql, Link } from 'gatsby';
// import Img from 'gatsby-image';

export default () => {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "abcs-screenshot-1-wide-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Abacusynth (Ableton Plugin)"
        description="A plugin for Ableton Live inspired by an Abacus"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Download Free',
            href: 'https://eliasjarzombek.gumroad.com/l/abacusynth',
          },
          {
            label: 'View User Guide',
            href: 'https://abacusynth.eliasjarzombek.com/m4l-manual/',
          },
          {
            label: 'Listen to the Compilation',
            href: 'https://jarz0.bandcamp.com/album/abacusynth-compilation',
          },
        ]}
        Content={() => (
          <div>
            <p>
              Abacusynth is a polyphonic synthesizer for Ableton Live. It allows
              you to create rich, dynamic synth sounds simply by placing and
              manipulating shapes on rods.
            </p>
            <p>
              If you don't have Ableton, check out the{' '}
              <Link to="/abacusynth">Web Version</Link>.
            </p>

            <p className="MediaWrapper">
              <div
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  title="Abacusynth Demo"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  src="https://www.youtube.com/embed/tm_rbCy_D5w"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </p>

            <p>
              The interface is inspired by an{' '}
              <a href="https://en.wikipedia.org/wiki/Abacus" target="blank">
                abacus
              </a>
              , the ancient counting tool used all around the world. Just like
              the abacus is used to learn the fundamentals of math, the
              Abacusynth can be used to explore the building blocks of audio
              synthesis through its primary interaction: placing and
              manipulating shapes on rods. This familiar layout facilitates a
              new way of visualizing synthesis that makes it easy and fun to
              create rich timbres without having to fiddle with lots of knobs
              and sliders.
            </p>

            <p>
              Timbre refers to all qualities of a sound that are not its pitch
              or volume. It is what allows us to discern the difference between,
              say, a piano and a trumpet that are playing the same note.
              Acoustic instruments produce timbre with their physical vibrations
              and resonances, and you can often adjust their timbre by using a
              modifier &mdash; the piano pedals or a trumpet mute for example.
              Synthesizers generate timbre electronically, meaning the control
              is not limited by any physical barrier. Turning one knob could
              completely alter the entire sound, depending on how the components
              are configured.
            </p>

            <p>
              Traditional synthesizers have so many inputs because they aim to
              provide as much control over timbre as possible, but their
              complexity can often be prohibitive for beginners (and confusing
              even for experienced musicians). Manipulating these parameters is
              integral to music production, but this kind of timbral control is
              not often emphasized for someone learning music, even though it's
              arguably just as “musical” as melody or rhythm.
            </p>

            <p>
              To address this, the Abacusynth interface organizes the timbral
              building blocks &mdash; oscillator waveforms, harmonics, filters,
              and time-based modulations (or LFOs) &mdash; in a visual and
              spatial interface that prioritizes interaction and invites
              experimentation.
            </p>

            <p>Check out a compilation of tracks made with Abacusynth below:</p>

            <p>
              <iframe
                style={{ border: 0, width: 350, height: 786 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=752206847/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
                seamless
              >
                <a href="https://jarz0.bandcamp.com/album/abacusynth-compilation">
                  Abacusynth Compilation by Various Artists
                </a>
              </iframe>
            </p>
          </div>
        )}
      />
    </div>
  );
};
