import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const {
    bannerImage,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "abcs-hardware-banner.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1: file(relativePath: { eq: "abcs-photos/1O7A8617.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "abcs-photos/1O7A8619.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "abcs-photos/1O7A8622.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "abcs-photos/1O7A8626.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "abcs-photos/1O7A8628.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6: file(relativePath: { eq: "abcs-photos/1O7A8629.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7: file(relativePath: { eq: "abcs-photos/1O7A8638.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8: file(relativePath: { eq: "abcs-photos/2V3A9522.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9: file(relativePath: { eq: "abcs-photos/abc-01.jpeg" }) {
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
        title="Abacusynth (Hardware)"
        bannerImage={img5}
        // bannerHeight={500}
        // links={[
        //   {
        //     label: 'Build Process',
        //     href: 'https://itp.eliasjarzombek.com/tags/thesis',
        //   },
        // ]}
        Content={() => (
          <div>
            <p>
              <Img
                fluid={img1.childImageSharp.fluid}
                alt="Front view of Abacusynth: a wooden device holding four rods vertically. Each rod has a colored triangular object that can spin and be moved side to side"
              />
            </p>

            <p>
              Abacuysnth is a synthesizer inspired by an{' '}
              <a href="https://en.wikipedia.org/wiki/Abacus">abacus</a>, the
              ancient counting tool used all around the world. Just like an
              abacus is used to learn the fundamentals of math, the Abacusynth
              can be used to explore the building blocks of audio synthesis.
            </p>

            <p>
              It exists in two forms, one{' '}
              <Link to="/abacusynth-plugin">digital</Link> and one physical,
              that are both based on the same primary interaction: placing and
              manipulating shapes on rods. The visual and tactile control makes
              it easy and fun to create rich timbres sounds without having to
              fiddle with lots of knobs and sliders.
            </p>

            <p>
              For more on the process, check out my{' '}
              <a href="https://itp.eliasjarzombek.com/tags/thesis">
                blog posts
              </a>{' '}
              explaining the fabrication, spinners, electronics, and code.
            </p>
            {/* <p>
              For more on the process, check out my posts on the{' '}
              <a href="/abacusynth-fabrication">fabrication</a>,{' '}
              <a href="/abacusynth-spinner">spinners</a>,{' '}
              <a href="/abacusynth-pcb-1">electronics</a>, and{' '}
              <a href="/abacusynth-software">code</a>.
            </p> */}

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
                  src="https://www.youtube.com/embed/1lWUlo18B14"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </p>

            <p>
              <a href="https://en.wikipedia.org/wiki/Timbre">Timbre</a> refers
              to all qualities of a sound that are not its pitch or volume. It
              is what differentiates different instruments that are playing the
              same note. Acoustic instruments produce timbre with their physical
              vibrations and resonances, and you can often adjust it using a
              modifier - such as the pedals on a piano or a mute for the
              trumpet.
            </p>
            <p>
              Synthesizers generate timbre electronically, meaning the control
              is not limited by any physical barrier. Lots of controls allow for
              granular control over timbre, but the complexity can often be
              prohibitive for beginners (and even tiresome for experienced
              musicians). The kind of timbral control that synthesizers provide
              is arguably just as “musical” as melody or rhythm, but it's not
              often emphasized for someone learning music.
            </p>
            <p>
              This is because most synths cater to the “Big C” creator, the
              professional or virtuoso who requires granular control in order to
              achieve their goal, and who is either willing or required to learn
              complex interfaces in order to do so.
            </p>
            <p>
              My target user is a “little C” creator, someone who is being
              creative just for the fun of it, and is more interested in feeling
              good while creating, instead of being focused on the outcome. This
              type of engagement is just as creative as “Big C”, but is not
              studied or considered as much when talking about design.
            </p>
            <p>
              This idea is summed up in a{' '}
              <a href="https://www.galaxykate.com/pdfs/kcompton-dissertation-casualcreators.pdf">
                paper
              </a>{' '}
              by <a href="https://www.galaxykate.com/">Kate Compton</a>, in
              which she introduces the term Casual Creator to define the class
              of systems that supports creativity for creativity's sake. I used
              the principles laid out in Compton&#39;s research to guide my
              design and development.
            </p>
            <p>
              Many of the casual creator music making tools out there focus on
              melody or song creation. My goal was to make an interface that
              explores synthesis and timbre.
            </p>
            <p>
              <p>
                <Img
                  fluid={img6.childImageSharp.fluid}
                  alt="Abacusynth with two of the spinners in motion"
                />
              </p>
            </p>
            <p>
              The interface organizes the timbral building blocks in a visual
              and spatial interface that prioritizes interaction and invites
              experimentation. My goal with the physical device was to create an
              instrument that someone could interact with immediately and
              directly (as opposed to the software where you need a computer +
              general computer knowledge). And since the original inspiration is
              a physical object anyway, I already had a sense of how the
              interactions could translate.
            </p>
            <p>
              <Img
                fluid={img2.childImageSharp.fluid}
                alt="Closeup shot of three of the rods and spinners"
              />
            </p>
            <p>
              <Img
                fluid={img3.childImageSharp.fluid}
                alt="Profile shot of the Abacusynth, showing four colored knobs on the side"
              />
            </p>
            <p>
              Interpreting the Casual Creator ideas into the physical form meant
              building a standalone device with a built-in speaker. When you
              turn it on, it starts making sound so that you can immediately
              interact with it. As you explore the possibility space, you
              discover new sounds through your actions.
            </p>

            <p>
              <Img
                fluid={img7.childImageSharp.fluid}
                alt="Closeup shot of the joint between the wooden wall and the rod"
              />
            </p>
            <p>
              <Img
                fluid={img9.childImageSharp.fluid}
                alt="Someone's hand turning the knob on the device"
              />
            </p>
            <p>
              The encoder controls the discrete options (things that change
              instantly) -- such as changing the waveform or harmonic. The
              spinning and sliding motions map to continuous parameters that are
              changed over time.
            </p>
            <p>
              <Img
                fluid={img5.childImageSharp.fluid}
                alt="Closeup of one of the spinners in motion"
              />
            </p>
            <p>
              The spinning interaction takes advantage of physics to illustrate
              a sonic phenomenon. It's what sets the interaction apart from any
              software, so it was the first thing I started developing.
            </p>
            <h3 id="modularity">Modularity</h3>
            <p>
              <Img
                fluid={img8.childImageSharp.fluid}
                alt="Photo showing the middle section (holding the rods and spinners) removed from the outer section"
              />
            </p>

            <p>
              Moving forward, I am thinking a lot about modularity. I designed
              the inner section to be removable (so it doesn't have any
              electronics in it). Theoretically this could be swapped out for
              another more experimental design (maybe featuring one or two
              bigger spinners). Additionally, the core concept could be reduced
              to individual modules that could be stacked or linked together in
              some way.
            </p>
            <h3 id="color">Color</h3>
            <p>
              <Img
                fluid={img4.childImageSharp.fluid}
                alt="closeup of the red spinner"
              />
            </p>
            <p>
              I think the color adds an element of playfulness but I plan on
              experimenting with different palettes. The good thing is that the
              colored elements are easily replaceable so I could create multiple
              sets.
            </p>
          </div>
        )}
      />
    </div>
  );
};
