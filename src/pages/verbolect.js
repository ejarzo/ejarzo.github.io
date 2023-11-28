import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const VerbolectPage = () => {
  const { bannerImage, image1, image2, image3 } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "verbolect-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image1: file(relativePath: { eq: "verbolect1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "verbolect2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: { eq: "verbolect4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <div>
      <ProjectPage
        title="Verbolect"
        subtitle="Multimedia Installation, 2017"
        description="A live-updating installation by Noncore Projector that explores a conversation between Cleverbot and itself"
        bannerImage={bannerImage}
        links={[
          { label: 'Project Website', href: 'http://verbolect.com/' },
          { label: 'Code', href: 'https://github.com/ejarzo/verbolect/' },
          {
            label: 'Press Release',
            href:
              'https://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/',
          },
        ]}
        Content={() => (
          <div>
            <p>
              Featured in: The{' '}
              <a
                href="https://www.nytimes.com/2017/11/08/arts/design/what-to-see-in-new-york-art-galleries-this-week.html"
                target="blank"
              >
                New York Times
              </a>
              ,{' '}
              <a href="https://www.screenslate.com/" target="blank">
                Screen Slate
              </a>
              .
            </p>
            <p>
              <em>Verbolect</em> is the first project by{' '}
              <a href="https://www.facebook.com/verbolect/" target="blank">
                NonCoreProjector
              </a>{' '}
              (Artist and educator{' '}
              <a href="http://www.johnjoconnor.net" target="blank">
                John O'Connor
              </a>
              , Cleverbot creator and AI expert{' '}
              <a
                href="https://en.wikipedia.org/wiki/Rollo_Carpenter"
                target="blank"
              >
                Rollo Carpenter
              </a>
              , multimedia artist Jack Colton, and myself)
            </p>
            <p>
              <em>Verbolect</em> is visual exploration of a conversation between{' '}
              <a href="http://www.cleverbot.com/" target="blank">
                Cleverbot
              </a>{' '}
              and itself. Cleverbot is a chatbot that uses artificial
              intelligence to talk with users. Since 1997, it has been learning
              how to speak by conversing with people around the world. Since
              everything that Cleverbot says has at some point been said to it,
              the project is as much an exploration of human tendencies as it is
              of "artificial" ones.
            </p>

            <p className="MediaWrapper wide">
              <GatsbyImage image={image2.childImageSharp.gatsbyImageData} />
            </p>

            <p>
              The installation, which allows you to see and hear the
              conversation, ran continuously from October 20 to November 19,
              2017 at{' '}
              <a
                href="http://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/"
                target="blank"
              >
                The Boiler
              </a>{' '}
              in Brooklyn.
            </p>
            <p className="MediaWrapper wide">
              <GatsbyImage image={image1.childImageSharp.gatsbyImageData} />
            </p>

            <p>
              Below is one of the many streams that were recorded during the
              exhibition.
            </p>
            <p className="MediaWrapper wide">
              <div
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative',
                }}
              >
                <iframe
                  title="Verbolect screen capture"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  src="https://www.youtube.com/embed/rU3ADcOaLvU?start=1454"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </p>

            <p className="MediaWrapper wide">
              <GatsbyImage image={image3.childImageSharp.gatsbyImageData} />
            </p>
            <p>
              I wrote the main projection code, which as a web application that
              uses several{' '}
              <a
                href="https://en.wikipedia.org/wiki/Application_programming_interface"
                target="blank"
              >
                APIs
              </a>{' '}
              to retrieve data that is then interpreted on the screen. The{' '}
              <a href="https://www.cleverbot.com/api/" target="blank">
                Cleverbot API
              </a>{' '}
              is the backbone of the piece. In addition to generating the
              conversation, it provides emotional analysis for each reply that
              we use to source images, videos, and audio.
            </p>
            <p>
              We use this emotion data to graph the conversation phrase by
              phrase and find relevant online content via external APIs
              (YouTube, stock footage, etc). These distinct "modules" are
              explored by a mechanical roving eye while the conversation takes
              place.
            </p>
            <p>
              <em>
                The main organizational construct of the projection is of a
                roving eye — simultaneously the idea of the bot searching
                outside of itself, into the world, looking for patterns, and of
                us, looking into its brain as if through a peephole. The
                emotional intensity of the words the bot speaks will dictate the
                substance, pace and movements of the projection’s machinations.
              </em>
            </p>
            <p>
              <a
                href="https://www.pierogi2000.com/2017/08/noncore-projector-at-the-boiler/"
                target="blank"
              >
                Read the full press release.
              </a>
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default VerbolectPage;
