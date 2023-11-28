import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const AbacusynthHardware = () => {
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
    {
      bannerImage: file(relativePath: { eq: "abcs-hardware-banner.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img1: file(relativePath: { eq: "abcs-photos/1O7A8617.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img2: file(relativePath: { eq: "abcs-photos/1O7A8619.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img3: file(relativePath: { eq: "abcs-photos/1O7A8622.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img4: file(relativePath: { eq: "abcs-photos/1O7A8626.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img5: file(relativePath: { eq: "abcs-photos/1O7A8628.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img6: file(relativePath: { eq: "abcs-photos/1O7A8629.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img7: file(relativePath: { eq: "abcs-photos/1O7A8638.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img8: file(relativePath: { eq: "abcs-photos/2V3A9522.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      img9: file(relativePath: { eq: "abcs-photos/abc-01.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Abacusynth (Hardware)"
        subtitle="Synthesizer, 2022"
        description="A synthesizer inspired by an Abacus"
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
              Abacuysnth is a synthesizer inspired by an{' '}
              <a href="https://en.wikipedia.org/wiki/Abacus">abacus</a>, the
              ancient counting tool used all around the world. Just like an
              abacus is used to learn the fundamentals of math, the Abacusynth
              can be used to explore the building blocks of audio synthesis.
            </p>
            <p>
              Featured in{' '}
              <a href="https://djmag.com/news/student-designs-synthesiser-inspired-abacus-abacusynth">
                DJ Mag
              </a>
              ,{' '}
              <a href="https://electronicsound.squarespace.com/shop/p/issue-92">
                Electronic Sound
              </a>
              ,{' '}
              <a href="https://mixmag.net/read/abacus-inspired-synth-student-thesis-mathematical-news">
                Mixmag
              </a>
              ,{' '}
              <a href="https://www.musicradar.com/news/10-weirdest-musical-instruments">
                MusicRadar
              </a>
              ,{' '}
              <a href="https://www.core77.com/posts/116513/The-Abacusynth-A-More-Tactile-Interface-for-Audio-Synthesizers">
                Core77
              </a>
              ,{' '}
              <a href="https://hackaday.com/2022/06/15/abacus-synthesizer-really-adds-up/">
                Hackaday
              </a>
              ,{' '}
              <a href="https://musictech.com/news/meet-abacusyth-abacus-inspired-synthesiser/">
                MusicTech
              </a>
              ,{' '}
              <a href="https://blog.adafruit.com/2022/06/15/abacusynth-hardware-adafruit-johnedgarpark-adafruit/">
                Adafruit
              </a>
              ,{' '}
              <a href="https://makezine.com/2022/06/16/abacus-synth-abacasynth/">
                Makezine
              </a>
              ,{' '}
              <a href="https://www.hackster.io/news/elias-jarzombek-s-abacusynth-is-a-casual-creator-device-realized-in-wood-and-clever-electronics-9a7f4b9b7851">
                Hackster.io
              </a>
              ,{' '}
              <a href="https://www.creativebrew.io/posts/issue-43/">
                Creative Brew
              </a>
              ,{' '}
              <a href="https://www.gearnews.com/abacusynth-spinning-wheels-of-synthesis-in-a-digital-physical-hybrid/">
                Gearnews
              </a>
              ,{' '}
              <a href="https://thevinylfactory.com/news/new-synth-inspired-by-the-abacus/">
                The Vinyl Factory
              </a>
              ,{' '}
              <a href="https://playtusu.com/haber/2022/06/abakusten-ilham-alan-synthesizeri-dinlemelere-doyamiyoruz/">
                Playtusu
              </a>
              ,{' '}
              <a href="https://www.youtube.com/watch?v=BWQYtBLHDI8&t=496s">
                The Electromaker Show
              </a>
              ,{' '}
              <a href="https://www.keyboards.de/stories/interagieren-mit-dem-abacusynth/">
                Keyboards DE
              </a>
              .{' '}
            </p>

            <p>
              Winner of{' '}
              <span
                className="award"
                style={{
                  background: 'linear-gradient(150deg, silver 0%, white 100%)',
                }}
              >
                🥈 <em>Second Place</em>
              </span>{' '}
              and the
              <span
                className="award"
                style={{
                  background: 'linear-gradient(150deg, gold 0%, white 100%)',
                }}
              >
                🏆
                <em>Peoples Choice Award</em>
              </span>{' '}
              at the{' '}
              <a href="https://guthman.gatech.edu/history">
                2023 Guthman Musical Instrument Competition
              </a>
              .
              <span
                className="award"
                style={{
                  background:
                    'linear-gradient(150deg, rgba(200,100,100) 0%, rgba(250,190,190) 100%)',
                }}
              >
                🎶
                <em>Finalist</em>
              </span>
              in the{' '}
              <a href="https://www.midi.org/component/zoo/item/abacusynth?Itemid=1423">
                2023 MIDI Innovation Awards
              </a>
              .
            </p>
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img1.childImageSharp.gatsbyImageData}
                alt="Front view of Abacusynth: a wooden device holding four rods vertically. Each rod has a colored triangular object that can spin and be moved side to side"
              />
            </figure>
            <p>
              The Abacusynth exists in two forms, one{' '}
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

            <p className="MediaWrapper wide">
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
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img6.childImageSharp.gatsbyImageData}
                alt="Abacusynth with two of the spinners in motion"
              />
            </figure>
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
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img2.childImageSharp.gatsbyImageData}
                alt="Closeup shot of three of the rods and spinners"
              />
            </figure>
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img3.childImageSharp.gatsbyImageData}
                alt="Profile shot of the Abacusynth, showing four colored knobs on the side"
              />
            </figure>
            <p>
              Interpreting the Casual Creator ideas into the physical form meant
              building a standalone device with a built-in speaker. When you
              turn it on, it starts making sound so that you can immediately
              interact with it. As you explore the possibility space, you
              discover new sounds through your actions.
            </p>

            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img7.childImageSharp.gatsbyImageData}
                alt="Closeup shot of the joint between the wooden wall and the rod"
              />
            </figure>
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img9.childImageSharp.gatsbyImageData}
                alt="Someone's hand turning the knob on the device"
              />
            </figure>
            <p>
              The encoder controls the discrete options (things that change
              instantly) -- such as changing the waveform or harmonic. The
              spinning and sliding motions map to continuous parameters that are
              changed over time.
            </p>
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img5.childImageSharp.gatsbyImageData}
                alt="Closeup of one of the spinners in motion"
              />
            </figure>
            <p>
              The spinning interaction takes advantage of physics to illustrate
              a sonic phenomenon. It's what sets the interaction apart from any
              software, so it was the first thing I started developing.
            </p>
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img8.childImageSharp.gatsbyImageData}
                alt="Photo showing the middle section (holding the rods and spinners) removed from the outer section"
              />
            </figure>

            <h3 id="modularity">Modularity</h3>
            <p>
              Moving forward, I am thinking a lot about modularity. I designed
              the inner section to be removable (so it doesn't have any
              electronics in it). Theoretically this could be swapped out for
              another more experimental design (maybe featuring one or two
              bigger spinners). Additionally, the core concept could be reduced
              to individual modules that could be stacked or linked together in
              some way.
            </p>
            <figure>
              <GatsbyImage
                objectFit={'contain'}
                image={img4.childImageSharp.gatsbyImageData}
                alt="closeup of the red spinner"
              />
            </figure>
            <h3 id="color">Color</h3>
            <p>
              I think the color adds an element of playfulness but I plan on
              experimenting with different palettes. The good thing is that the
              colored elements are easily replaceable so I could create multiple
              sets.
            </p>
            <p>
              For more on the abacusynth project, check out the{' '}
              <a href="/abacusynth-plugin">plugin for Ableton</a> or the
              <a href="/abacusynth">web version</a>.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default AbacusynthHardware;
