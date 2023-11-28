import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ResponsiveIframe from '../components/ResponsiveIframe';

const PuncturePage = () => {
  const { bannerImage, schematic, boxImg } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "puncture-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      boxImg: file(relativePath: { eq: "puncture-box-wireframe.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      schematic: file(relativePath: { eq: "puncture-system-diagram.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Puncture"
        description="A collaborative performance with artist Marcel Yiran Wang using a custom-built musical interface"
        bannerImage={bannerImage}
        links={[
          { label: 'Watch Performance', href: 'https://vimeo.com/641689631' },
          // {
          //   label: 'View Source',
          //   href: 'https://github.com/ejarzo/abacusynth',
          // },
        ]}
        Content={() => (
          <div>
            <p>
              <em>Puncture</em> is a collaboration with{' '}
              <a href="https://yiranwang.art/">Marcel Wang</a>. It is a musical
              interface and performance that explores pressure, tension, and
              release.
            </p>
            <p>
              <ResponsiveIframe
                title="'Puncture' performance"
                src="https://player.vimeo.com/video/641689631?color=eae6de"
              />
            </p>

            <h3>Background</h3>
            <p>
              This piece expands on Marcel's previous work entitled{' '}
              <a href="https://yiranwang.art/untitled">
                <em>“ ”</em>
              </a>{' '}
              that employs the distortion and crumpling of paper to reflect on
              emotional stress that cannot be undone. In her words:
            </p>
            <p>
              <em>
                The initial idea comes from my unfortunate experience when I was
                in senior school. The reason for the box is because it has a
                similar shape to the student locker in my school. It took me a
                long time to get rid of the shadow of the locker because
                something bad happened which deeply affected me at that time.
                The intention of the paper is pretty obvious as its materiality:
                easy to be broke and tortured which makes me feel it is fragile
                like a human being. Although it is from my personal experience,
                I don't want it to be "my personal" somehow. I didn't include
                any specific direction in either description and project title.
                I intend to encourage the audience to recall their own memories,
                some painful and broken moments in their own lives instead of
                thinking like "this is the experience of the artist, having
                nothing to do with me".
              </em>
            </p>
            <p>
              Our piece extends this theme into the sonic realm. The paper (and
              box) becomes the interface through which we create sound and
              music.
            </p>
            <h3>Concept</h3>
            <p>
              <GatsbyImage
                image={boxImg.childImageSharp.gatsbyImageData}
                alt="3D rendering of the box showing the paper face sandwiched in between the front rim of the box and the back"
              />
            </p>
            <p>
              The title <em>Puncture</em>, or "cause a sudden collapse of (mood
              or feeling)", provides a blueprint for how we wanted the
              experience to feel. The words we used to describe the feeling were
              "uncomfortable, annoying, chaos, anxious, not beautiful". "You
              have to push it very carefully to touch the boundary and breaking
              point."
            </p>
            <p>
              <GatsbyImage
                image={schematic.childImageSharp.gatsbyImageData}
                alt="System diagram. Two boxes, each being recorded by two contact mics, connect to a computer. The first box has holes in the back through which pressure sensitive rods are inserted. Their pressure is used to generate sound"
              />
            </p>
            <p>
              Performing with this device involves exploring the paper's texture
              and resistance by inserting 'prods' into holes in the back of the
              box and pressing against the paper surface. From the front, the
              audience sees a paper sheet being poked and stretched from under
              the surface. The sound of the paper crinkling, stretching, and
              tearing is blended with synthesized and recorded audio that is
              modulated by the pressure being exerted on the different prods.
              The harder you press, the more intense the sound becomes until
              eventually you puncture the surface and are left with silence. Our
              performance also features a second box, an early prototype that we
              repurposed to create a duet. The second box is positioned flat on
              the table and is played like a percussion instrument, using the
              box frame and paper surface to create texture and rhythm.
            </p>
            <h3>Sound Design</h3>
            <p>
              The sound consists of a mixture of raw audio from the contact
              microphones and synthesized/recorded audio from Ableton Live. We
              use Max/MSP to map the pressure sensors to various parameters in
              Ableton. In addition to the raw pressure values, we also calculate
              the velocity and acceleration of the values. This allows us to
              explore many more sonic avenues than with just the raw values --
              for example, quick presses affect the sound differently than long
              slow presses.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default PuncturePage;
