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
            label: 'Process Documentation',
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
              It is an interactive musical system that explores the physical
              motion of hanging objects as a method for manipulating sound.
              Using wind and light, we work in tandem to control the environment
              in which these objects react. As the objects swing and spin
              through the air, their movements are interpreted as sonic
              transformations ranging from calm and predictable to chaotic and
              random.
            </p>
            <p>
              With our piece we hope to tap into how we are drawn to observing
              natural movements, such as a balloon flying into the sky, or a
              pendulum swinging for eternity. These motions give us a glimpse
              into the infinite interconnected variables that make up our
              reality and provide us a moment of meditative peace and
              contemplation. Using a circle and square, the geometric primitives
              that represent fundamental physical building blocks, we try to
              capture the sensibility and romance through their interactions and
              inspire people's imagination and memory through movement and
              sound.
            </p>
            <p>
              <Img fluid={circleAndCubeImg.childImageSharp.fluid} />
            </p>
            <p>
              <Img fluid={marcelImg.childImageSharp.fluid} />
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
              We use light and wind to inject natural movement and energy into
              our performance. The three-dimensional motions of the cube and
              disk are captured and transmitted to a computer in real-time,
              where they are transformed into sonic parameters. The cube
              controls a synthesizer while the circle modulates effects on live
              vocals.
            </p>
            <p>
              Our lyrics draw from scientific laws such as Newton's Laws of
              Motion the Law of Conservation of Energy. We each speak in a
              different language, blending our voices into a soundscape
              controlled by the objects' movements.
            </p>
            <p>
              <em>
                An object at rest stays at rest and an object in motion stays in
                motion with the same speed and in the same direction unless
                acted upon by an unbalanced force.
              </em>
              <br />
              &mdash; Newton's first Law of Motion
            </p>
            <p>
              <em>
                The total energy of an isolated system remains constant; it is
                said to be conserved over time. Energy can neither be created
                nor destroyed; rather, it can only be transformed or transferred
                from one form to another.
              </em>
              <br />
              &mdash; Law of Conservation of Energy
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
