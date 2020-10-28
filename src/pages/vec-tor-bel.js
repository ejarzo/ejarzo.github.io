import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const {
    bannerImage,
    image1,
    image2,
    image3,
    image4,
  } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "vec-tor-bel-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image1: file(relativePath: { eq: "vec-tor-bel1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "vec-tor-bel2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "vec-tor-bel3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "vec-tor-bel4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
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
        title="Vec Tor Bel"
        bannerImage={bannerImage}
        links={[
          { label: 'Code', href: 'https://github.com/ejarzo/vec-tor-bel' },
          {
            label: 'Press Release',
            href:
              'https://static1.squarespace.com/static/58f3d8852e69cf9a78f98a6c/t/5be4657dc2241be6e98425d2/1541694846194/Press+Release+%7C+NonCoreProjector+%7C+Vec+Tor+Bel+.pdf',
          },
        ]}
        Content={() => (
          <div>
            <p>
              <em>Vec Tor Bel</em> is an API art installation by{' '}
              <a href="https://noncoreprojector.com" target="blank">
                NonCoreProjector
              </a>{' '}
              (
              <a href="http://www.johnjoconnor.net" target="blank">
                John O'Connor
              </a>
              ,{' '}
              <a
                href="https://en.wikipedia.org/wiki/Rollo_Carpenter"
                target="blank"
              >
                Rollo Carpenter
              </a>
              ,{' '}
              <a
                href="https://www.instagram.com/jakecalcium/?hl=en"
                target="blank"
              >
                Jack Colton
              </a>
              , and myself).
            </p>
            <p>
              The piece opened in November 2018 at{' '}
              <a href="https://false-flag.org/" target="blank">
                False Flag
              </a>{' '}
              gallery. Below is an excerpt from the press release accompanied
              with images of the installation.
            </p>
            <p className="MediaWrapper">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  title="Vec Tor Bel sequence"
                  src="https://player.vimeo.com/video/302939221?color=eee"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </p>
            <p>
              Projected onto the gallery’s main wall is a continually-evolving
              series of translucent videos, overlaid with dynamic colored
              graphs. The visual content is produced by Cleverbot, a chatbot
              developed by Rollo Carpenter, driven by an artificial intelligence
              algorithm.
            </p>
            <p>
              Each day initiates a new conversation: Cleverbot pulls a headline
              from the morning’s news, searches that phrase on YouTube, plays
              the resulting video, and reads aloud the first comment - which
              becomes the initial node on a projected graph. Cleverbot responds
              to this initial comment, then uses the response for a subsequent
              search, repeating this cycle through the end of the day.
            </p>
            <p className="MediaWrapper">
              <Img fluid={image1.childImageSharp.fluid} />
            </p>
            <p className="MediaWrapper">
              <Img fluid={image3.childImageSharp.fluid} />
            </p>
            <p>
              The average color of each video is distilled into a transparent
              filter, creating a haze of colored fields. While the videos are
              largely silent, their same originating phrases are also searched
              for on a found-sound database; the results are correlatively
              diffused, stretched, and compressed into the soundtrack. ​The
              emotional intensity of the language dictates the substance, pace
              and movements of the projection: Cleverbot’s AI algorithm
              analayzes then ​charts the emotional content of the scanned
              commentary through color, line type, and direction.
            </p>
            <p className="MediaWrapper">
              <Img fluid={image2.childImageSharp.fluid} />
            </p>
            <p className="MediaWrapper">
              <Img fluid={image4.childImageSharp.fluid} />
            </p>
            <p>
              NonCoreProjector conceives of this new piece as “a series of
              interruptions”: with each interaction, there is a re-direction or
              derailment, evoking increasingly-familiar cultural and political
              interruptions. Bringing together found footage,
              algorithmically-induced uncertainty, and appropriated human
              commentary, ​<em>Vec Tor Bel</em> ​portrays two ‘intelligences’
              attempting to make sense of both one another and the world at
              large. In ways both fascinating and terrifying, the slippages that
              perpetually dislodge any emergent logic send us down a Dada-ist
              rabbit hole.
            </p>
            <p>
              While there are parameters within which ​<em>Vec Tor Bel​</em>{' '}
              operates, the collective forfeits a significant degree of agency,
              yielding unpredictable results. In the spirit of Bruce Conner,
              John Cage, and Yoko Ono, the moment-to-moment outcome cannot be
              anticipated. At once eerily humanistic and undeniably
              technological, ​Vec Tor Bel​ advances NonCoreProject’s
              investigation of the uncanny entities that hold growing sway over
              our lives - from the causes we embrace to the partners we choose.
            </p>
          </div>
        )}
      />
    </div>
  );
};
