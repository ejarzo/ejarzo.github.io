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
    img10,
    img11,
    img12,
  } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "rltv/rltv-banner.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1: file(relativePath: { eq: "rltv/IMG_1580.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "rltv/IMG_8645.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "rltv/IMG_1534.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "rltv/IMG_1569.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "rltv/IMG_1546.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6: file(relativePath: { eq: "rltv/IMG_1560.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7: file(relativePath: { eq: "rltv/IMG_1568.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8: file(relativePath: { eq: "rltv/IMG_1542.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9: file(relativePath: { eq: "rltv/IMG_1543.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img10: file(relativePath: { eq: "rltv/IMG_1538.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img11: file(relativePath: { eq: "rltv/Graphs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img12: file(relativePath: { eq: "rltv/IMG_1551.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(bannerImage);
  return (
    <div>
      <ProjectPage
        title="Rec Lobe TV"
        description="A real-time multimedia installation mapping the labyrinthine processes through which human experience is perceived and transformed"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Visit',
            href: 'https://www.uwyo.edu/artmuseum/exhibitions/current/',
          },
          {
            label: 'Noncore Projector',
            href: 'https://www.instagram.com/noncoreprojector/',
          },
        ]}
        Content={() => (
          <div>
            <p>
              <Img
                fluid={img1.childImageSharp.fluid}
                alt="View of the gallery as you walk in"
              />
            </p>
            <p>
              Rec Lobe TV is the third multimedia installation in a series of
              projects by the group{' '}
              <a href="https://www.instagram.com/noncoreprojector/">
                Noncore Projector
              </a>
              . It extends and refines the ideas we developed in{' '}
              <Link to="/verbolect">Verbolect</Link> and{' '}
              <Link to="/vec-tor-bel">Vec Tor Bel</Link>. The works pull
              publicly available data in real time to create ever-changing
              visual and sonic landscapes.
            </p>
            <p className="border--dashed" style={{ padding: '1em' }}>
              RLTV runs from <strong>July 2 - December 23, 2022</strong> at the{' '}
              <a href="https://www.uwyo.edu/artmuseum/exhibitions/current/">
                <strong>University of Wyoming Art Museum </strong>
              </a>
              .
            </p>
            {/* <h2>Concept</h2> */}
            <p>
              Rec Lobe TV maps the labyrinthine processes through which human
              experience is perceived and transformed - from observation through
              language - into a multi-sensory simulacrum that affects consequent
              behavior and beliefs. RLTV follows this chain reaction
              step-by-step, rendering the results visible, no matter how
              bizarre: from real-time accounts of local events and national news
              reporting, into the untethered time-space of the internet and AI
              intelligence.
            </p>
            <p>
              <Img
                fluid={img2.childImageSharp.fluid}
                alt="View of the main projection showing a collage of overlayed videos"
              />
            </p>
            <p>
              Like mapping a complex, multi-directional game of telephone, RLTV
              mirrors the process by which we come to believe what’s real in the
              world, as direct observation of a singular phenomenon mutates
              through law enforcement, media, AI, stochastic stimuli, and
              storytelling into eerily uncanny phenomena. Like Joseph Heller
              wrote in Catch-22, “Just because you’re paranoid, doesn't mean
              they aren’t after you.”
            </p>
            <p>
              <Img
                fluid={img3.childImageSharp.fluid}
                alt="View of the graph and main projections on adjacent walls"
              />
            </p>
            <h2>Press Release Excerpt</h2>
            <p>
              Bringing together real time events, collaged footage, global
              patterns of journalistic story-telling, chatbot AI, and
              appropriated human commentary, Rec Lobe TV portrays several
              ‘intelligences’ attempting to make sense of each other and the
              world at large. In ways both fascinating and terrifying, the
              slippages that perpetually dislodge any emergent logic send us
              down the rabbit hole. Each output (projection, graphs, media, web
              browsing) represents a specific method through which we, as human
              beings, attempt to understand the world via the media around us,
              and, simultaneously, how these same media cycles can confuse,
              obfuscate, and ultimately cause us to lose our senses of self.
              While there are parameters within which RLTV operates, our
              collective forfeits a significant degree of agency to the system
              we create, embracing the unpredictable at each step, as the
              moment-to-moment outcome cannot be anticipated. Simultaneously
              humanistic and technological, Rec LobeTV advances our
              investigation of the uncanny entities that shape our lives.{' '}
            </p>

            <p>
              <Img
                fluid={img11.childImageSharp.fluid}
                alt="Four printed graphs of varying complexity -- overlaying geometric shapes and colors"
              />
              <figcaption>
                Four printed graphs of varying complexity. The graph prints at
                the end of each sequence.
              </figcaption>
            </p>
            <p>
              <Img
                fluid={img4.childImageSharp.fluid}
                alt="View from the corner of the gallery showing all of the elements: the printer, police scanner, diagram, and two projections"
              />
              <figcaption>
                View from the corner of the gallery showing all of the elements:
                the printer, police scanner, diagram, and two projections
              </figcaption>
            </p>
            <p>
              <Img
                fluid={img12.childImageSharp.fluid}
                alt="A closeup of the police scanner table showing the scanner and a laptop running software that transcribes the scanner feed"
              />
              <figcaption>
                The police scanner kicks off the conversation. Its
                transcriptions are used to search for news headlines.
              </figcaption>
            </p>
            <p>
              <Img
                fluid={img5.childImageSharp.fluid}
                alt="A visitor watching the main projection with the graph in the background"
              />
              <figcaption>
                The conversation is graphed based on the sentiment analysis of
                each response.
              </figcaption>
            </p>
            {/* <p>
              <Img
                fluid={img6.childImageSharp.fluid}
                alt="Photo of the gallery as you walk in"
              />
            </p> */}
            {/* <p>
              <Img
                fluid={img7.childImageSharp.fluid}
                alt="Photo of the gallery as you walk in"
              />
            </p> */}
            <p>
              <Img
                fluid={img8.childImageSharp.fluid}
                alt="A visitor watching the main projection"
              />
              <figcaption>
                Videos are found on YouTube relating to the current
                conversation. They are overlayed on each other with effects
                relating to the emotional content of the responses.
              </figcaption>
            </p>
            {/* <p>
              <Img
                fluid={img9.childImageSharp.fluid}
                alt="Photo of the gallery as you walk in"
              />
            </p> */}
            <p>
              <Img
                fluid={img10.childImageSharp.fluid}
                alt="Two visitors watching the main projection, now just a small circle"
              />
              <figcaption>
                A roving eye attempts to find meaning in the absurdity.
              </figcaption>
            </p>
          </div>
        )}
      />
    </div>
  );
};
