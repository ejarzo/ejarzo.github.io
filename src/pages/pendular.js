import React from 'react';
import ProjectPage from '../components/ProjectPage';
import ResponsiveIframe from '../components/ResponsiveIframe';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import video1 from '../video/pendular/cube-spin.mp4';
import video2 from '../video/pendular/disk-wind.mp4';
import video3 from '../video/pendular/pendular-computer-screen.mp4';
import video4 from '../video/pendular/both-swinging.mp4';

export default () => {
  const {
    bannerImage,
    computerScreenImg,
    meImg,
    marcelImg,
    // circleImg1,
    // circleImg2,
    // cubeImg1,
    circleAndCubeImg,
    circleImg3,
    cubeImg2,
    cubeImg3,
  } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "pendular-banner-1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      computerScreenImg: file(
        relativePath: { eq: "pendular-images/pendular-computer-screen.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meImg: file(relativePath: { eq: "pendular-images/E01.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marcelImg: file(relativePath: { eq: "pendular-images/marcel.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circleImg1: file(relativePath: { eq: "pendular-images/circle1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circleImg2: file(relativePath: { eq: "pendular-images/circle2.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cubeImg1: file(relativePath: { eq: "pendular-images/cube1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circleAndCubeImg: file(
        relativePath: { eq: "pendular-images/circle-and-cube.JPG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circleImg3: file(relativePath: { eq: "pendular-images/circle3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cubeImg2: file(relativePath: { eq: "pendular-images/cube2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cubeImg3: file(relativePath: { eq: "pendular-images/cube3.png" }) {
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
        title="Pendular"
        bannerImage={bannerImage}
        links={[
          { label: 'Watch Performance', href: 'https://vimeo.com/662058424' },
          {
            label: 'View Source',
            href: 'https://github.com/ejarzo/pendular',
          },
          {
            label: 'Documentation',
            href: 'https://itp.eliasjarzombek.com/nime-pendular/',
          },
        ]}
        Content={() => (
          <div>
            <p>
              <ResponsiveIframe
                title="'Pendular' performance"
                src="https://player.vimeo.com/video/662058424?color=eae6de"
              />
            </p>
            <p>
              Pendular is a collaborative piece that I developed with{' '}
              <a href="https://yiranwang.art/">Marcel Wang</a> as part of the
              ITP's NIME class.
            </p>

            <p>
              We are naturally drawn to observing movements such as a balloon
              flying into the sky, or a pendulum swinging in perfect time. These
              motions give us a glimpse into the infinite interconnected
              variables that make up our reality. They captivate us in their
              seeming randomness (when there are too many variables to model) or
              their predictability (when the system can be accurately
              represented with mathematical functions). Observing such phenomena
              provides us with a moment of meditative peace and contemplation,
              not unlike the feeling you get when listening to music you love.
              In our interactive musical system Pendular, we draw a connection
              between these two sensibilities. The work introduces a method of
              translating the invisible forces around us into the sonic realm,
              in an effort to inspire imagination and memory through movement
              and sound.
            </p>
            <p>
              <Img fluid={circleAndCubeImg.childImageSharp.fluid} />
            </p>
            <p>
              Pendular's interface consists of two objects — a circle and a cube
              — suspended from above. As they swing and spin through the air,
              their movements are tracked by sensors and interpreted as sonic
              transformations. The geometric primitives — differing in material
              and weight — highlight the range of expression allowed by the
              system while also visually representing how sound can be
              decomposed into simple waveforms. A custom Max/MSP program allows
              the performer(s) to dynamically map the incoming data to
              parameters in Ableton Live. We designed the technology to be as
              non-intrusive as possible, allowing both performer and audience to
              focus on the interaction.
            </p>
            <p>
              <Img fluid={marcelImg.childImageSharp.fluid} />
            </p>
            <p>
              Our performance with the interface is structured around the
              delicate power dynamic between human and natural forces. The
              musical arrangement reflects this relationship in its combination
              of organic and inorganic sounds: the disc modulates effects on
              live vocals while the cube affects the timbre of a synthesizer. We
              begin by establishing the link between motion and sound: we
              manipulate the two objects in a predictable manner: pushing,
              rotating, and shining lights on them in dialogue with the music.
              We speak lyrics inspired by laws of physics such as Newton's First
              Law (An object at rest stays at rest and an object in motion stays
              in motion…) and the Law of Conservation of Energy (The total
              energy in an isolated system remains constant…).
            </p>

            <p>
              <Img fluid={meImg.childImageSharp.fluid} />
            </p>
            <p>
              <video
                controls
                autoplay="true"
                muted
                loop
                style={{ width: '100%' }}
              >
                <source src={video4} type="video/mp4" />
                <track default kind="captions" src="" />
              </video>
            </p>
            <p>
              As the performance progresses, we relinquish control and allow
              natural forces to dictate the narrative. We start using a fan to
              move the objects. As we adjust the source, direction, and strength
              of the wind, the trajectory of each object becomes increasingly
              random and unpredictable. We also activate hanging light sources
              that shine on the objects as they move in the wind. As our voices
              — each speaking a different language — blend into an abstract
              soundscape and the synth sound becomes wild and atonal, our
              performance then becomes more about responding to the motion than
              triggering it.
            </p>
            <p>
              Through this exchange of roles, Pendular describes not just the
              natural movement that we see, but also how our mind oscillates
              between different states, and how the relationships between
              people, technology, and nature are constantly changing in response
              to each other.
            </p>
            {/* <p>Motions that are the result of infinite variables</p> */}
            <p>
              <Img fluid={cubeImg2.childImageSharp.fluid} />
            </p>
            <p>
              <video autoplay="true" muted loop style={{ width: '100%' }}>
                <source src={video1} type="video/mp4" />
                <track default kind="captions" src="" />
              </video>
            </p>
            <p>
              <Img fluid={circleImg3.childImageSharp.fluid} />
            </p>
            <p>
              <video autoplay="true" muted loop style={{ width: '100%' }}>
                <source src={video2} type="video/mp4" />
                <track default kind="captions" src="" />
              </video>
            </p>
            <p>
              <strong>Pendular</strong>
              <br />
              <em>Poem by Zairan Liu</em>
              <br />
              <br />
              让心脏短暂飞行
              <br />
              在悬浮的海里
              <br />
              命运从我的手里
              <br />
              吃着晚餐的米粒
              <br />
              被黑暗强求
              <br />
              对折呼吸
              <br />
              我的眼睛便急驰向深处
              <br />
              <br />
              夜的边界尚未显现
              <br />
              吊死的鬼不甘寂寞
              <br />
              归来，一种谬误
              <br />
              沿着袅袅的光的残留
              <br />
              追随风的味道
              <br />
              在夜晚里味蕾打开
              <br />
              做梦，像进入女人的身体般
              <br />
              下沉 ——
              <br />
              在融蜡般的黑海中浸了一夜
              <br />
              却不曾与沉默共生
              <br />
              只剩一颗心脏 即将燃尽
              <br />
              飞行 在找到落点之前
              <br />
            </p>
            {/* <p>
              <Img fluid={circleImg1.childImageSharp.fluid} />
              </p>
              <p>
              <Img fluid={circleImg2.childImageSharp.fluid} />
            </p> */}
            {/* <p>
              <Img fluid={cubeImg1.childImageSharp.fluid} />
            </p> */}
            <p>
              <Img fluid={cubeImg3.childImageSharp.fluid} />
            </p>
            <p>
              <Img fluid={computerScreenImg.childImageSharp.fluid} />
            </p>

            <p>
              <video autoplay="true" muted loop style={{ width: '100%' }}>
                <source src={video3} type="video/mp4" />
                <track default kind="captions" src="" />
              </video>
            </p>
          </div>
        )}
      />
    </div>
  );
};
