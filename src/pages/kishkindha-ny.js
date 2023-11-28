import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';

import bannerImage from '../images/kishkindha/kishkindha-banner.jpeg';

const Page = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(
        relativePath: { eq: "kishkindha/kishkindha-banner.jpeg" }
      ) {
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
            <p>
              The piece was performed at the{' '}
              <a href="https://timespaceexistence.com/" target="blank">
                TIME SPACE EXISTANCE
              </a>{' '}
              exhibition during the 2023 Venice Architecture Biennale in Venice,
              Italy.
            </p>

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
            <p>
              <strong>ACT ONE: UMBRA</strong>. We begin by observing the death
              of the contemporary city, the end of the ancient imaginary as the
              locus of civilization.
            </p>
            <p>
              <strong>ACT TWO: DNA</strong> molecules disintegrate and recombine
              to form a new interspecies. We see octopus, mushrooms and tree
              roots. The ‘beastie’ is created.
            </p>
            <p>
              <strong>ACT THREE: KISHKINDHA NY</strong>: Above ground, the
              ‘beastie’ transforms the city. Spores are released. It destroys
              and rebuilds. The old city metabolizes into the forest city. Human
              consciousness, locked into momentarily, rewires.
            </p>
            <p>
              <strong>ACT FOUR: BALANDO</strong>. We can no longer walk. We can
              only dance. Moving in curves, tangents, and parabolas, we leave
              our homes and gather in the forest-street for joyous reaffirmation
              of life. The epic has begun.
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default Page;
