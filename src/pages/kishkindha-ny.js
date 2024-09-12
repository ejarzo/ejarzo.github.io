import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ResponsiveIframe from '../components/ResponsiveIframe';

const Page = () => {
  const {
    bannerImage,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  } = useStaticQuery(graphql`
    {
      bannerImage: file(
        relativePath: { eq: "kishkindha/kishkindha-banner-3.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image1: file(relativePath: { eq: "kishkindha/kishkindha-1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "kishkindha/kishkindha-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: { eq: "kishkindha/kishkindha-3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image4: file(relativePath: { eq: "kishkindha/kishkindha-4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image5: file(relativePath: { eq: "kishkindha/kishkindha-5.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image6: file(relativePath: { eq: "kishkindha/kishkindha-6.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image7: file(relativePath: { eq: "kishkindha/kishkindha-7.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image8: file(relativePath: { eq: "kishkindha/kishkindha-8.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image9: file(relativePath: { eq: "kishkindha/kishkindha-9.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      image10: file(relativePath: { eq: "kishkindha/kishkindha-10.jpeg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const bannerImageStaticUrl = bannerImage;

  return (
    <div>
      <ProjectPage
        title="Kishkindha NY"
        subtitle="Music for Dance, 2023"
        description="A speculative-fiction work, Kishkindha NY (exhibited in Palazzo Bembo) reimagines New York as a multi-species 'forest-city'"
        bannerImage={bannerImage}
        bannerImageStaticUrl={bannerImageStaticUrl}
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
              <em>Kishkindha NY</em> is a collaboration with the{' '}
              <a href="https://www.officeofuncertaintyresearch.org/kishkindha-new-york">
                Office of Uncertainty Research
              </a>{' '}
              and Italian dance group STORMO, choreographed by Carla Marazzato.
            </p>
            <ResponsiveIframe
              src="https://youtube.com/embed/y2p3UYNB8yM"
              title="Kishkindha NY"
            />
            <p>
              The piece was performed at the{' '}
              <a href="https://timespaceexistence.com/" target="blank">
                TIME SPACE EXISTANCE
              </a>{' '}
              exhibition during the 2023 Venice Architecture Biennale in Venice,
              Italy.
            </p>
            <p>
              I composed and recorded the original score for the 4 act
              performance.
            </p>
            <figure>
              <GatsbyImage
                image={image1.childImageSharp.gatsbyImageData}
                alt="act one: umbra"
              />
            </figure>
            <p>
              <em>
                In this speculative-fiction work, Kishkindha NY reimagines New
                York as a multi-species ‘forest-city’. It is not a ‘design
                proposal’ but an ‘epic’. It is intended to provoke a radical
                reimagining, a conversation on how we live on our planet as a
                response to the climate emergency, Its inspirations are
                indigenous, global and posthuman.
              </em>{' '}
              – Office of Uncertainty Research
            </p>
            <p>
              The agent of change is a sci-fi inspired ‘beastie’ that is part
              mechanical and part fungus/octopus.
            </p>
            <p>
              Today we walk and drive. In Kishkindha NY, they say, we all dance.
              Today’s performance enacts this transformation.
            </p>
            <figure>
              <GatsbyImage
                image={image2.childImageSharp.gatsbyImageData}
                alt="act one: umbra"
              />
            </figure>
            <p>
              <strong>ACT ONE: UMBRA</strong>. We begin by observing the death
              of the contemporary city, the end of the ancient imaginary as the
              locus of civilization.
            </p>
            <figure>
              <GatsbyImage
                image={image3.childImageSharp.gatsbyImageData}
                alt="act one: umbra"
              />
            </figure>
            <p>
              <strong>ACT TWO: DNA</strong> molecules disintegrate and recombine
              to form a new interspecies. We see octopus, mushrooms and tree
              roots. The ‘beastie’ is created.
            </p>
            <figure>
              <GatsbyImage
                image={image4.childImageSharp.gatsbyImageData}
                alt="act two: dna"
              />
            </figure>
            <p>
              <strong>ACT THREE: KISHKINDHA NY</strong>: Above ground, the
              ‘beastie’ transforms the city. Spores are released. It destroys
              and rebuilds. The old city metabolizes into the forest city. Human
              consciousness, locked into momentarily, rewires.
            </p>
            <figure>
              <GatsbyImage
                image={image5.childImageSharp.gatsbyImageData}
                alt="act three: kishkindha ny"
              />
            </figure>
            <figure>
              <GatsbyImage
                image={image6.childImageSharp.gatsbyImageData}
                alt="act three: kishkindha ny"
              />
            </figure>
            <p>
              <strong>ACT FOUR: BALANDO</strong>. We can no longer walk. We can
              only dance. Moving in curves, tangents, and parabolas, we leave
              our homes and gather in the forest-street for joyous reaffirmation
              of life. The epic has begun.
            </p>

            <figure>
              <GatsbyImage
                image={image8.childImageSharp.gatsbyImageData}
                alt="act four: balando"
              />
            </figure>
            <figure>
              <GatsbyImage
                image={image9.childImageSharp.gatsbyImageData}
                alt="act four: balando"
              />
            </figure>
            <figure>
              <GatsbyImage
                image={image10.childImageSharp.gatsbyImageData}
                alt="act four: balando"
              />
            </figure>
          </div>
        )}
      />
    </div>
  );
};

export default Page;
