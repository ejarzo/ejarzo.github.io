import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const { bannerImage, coverImage, exhibitionImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "tirtha-banner-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coverImage: file(relativePath: { eq: "tirtha-album-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      exhibitionImage: file(relativePath: { eq: "tirtha-exhibition.png" }) {
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
        title="Tirtha: An Architectural Opera"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Visit Exhibition (Venice)',
            href: 'http://timespaceexistence.com/exhibition/',
          },
          {
            label: 'View Design Project',
            href:
              'https://www.officeofuncertaintyresearch.org/tirtha-recomposting-temple-complex',
          },
          {
            label: 'Stream the Album',
            href: 'https://linktr.ee/jarz0',
          },
        ]}
        Content={() => (
          <div>
            <p className="border--dashed" style={{ padding: '1em' }}>
              <Img
                style={{ marginBottom: '1em' }}
                fluid={exhibitionImage.childImageSharp.fluid}
              />
              You can see Tirtha in person at the{' '}
              <a href="http://timespaceexistence.com/exhibition/">
                TIME SPACE EXISTENCE
              </a>{' '}
              exhibition, which runs from May 22nd - Nov 21th, 2021 at the
              Palazzo Bembo in Venice Italy.
            </p>
            <p>
              <em>Tirtha: An Architectural Opera</em> is a cross-disciplinary,
              collaborative effort to present architecture as a multimedia
              experience. Conceived by{' '}
              <a href="https://www.officeofuncertaintyresearch.org/">
                The Office of Uncertainty Research
              </a>
              , the project imagines a site-specific "Recomposting Center" — a
              burial place where human bodies are composted — through music,
              video, concept art, and architectural design.
            </p>
            <p>
              The Opera is presented virtually as a ~35 minute video made up of
              12 acts. I wrote the music, which is also available in album
              format.
            </p>
            <p>
              Watch the opera in its entirety or stream the album below. It's
              also available on{' '}
              <a href="https://linktr.ee/jarz0">streaming services</a>.
            </p>
            <p>
              <iframe
                title="Tirtha: An Architectural Opera video"
                src="https://player.vimeo.com/video/476512339?color=eae6de"
                width="100%"
                height="400"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              <em>
                "The operatic tradition, in the West, thrills in presenting and
                re-presenting, the well-worn drama, with exaggerated auditory
                and visual delight. With Tirtha, OUR aspires to present
                architecture with the same auditory and visual delight, thereby
                inaugurating a new tradition for architectural representation.
                By adding narrative, music and spectacle to it, Tirtha seeks to
                transform the dull architectural custom of the ‘rendering’ and
                the ‘fly-through’ into a performance art.
              </em>
            </p>
            <p>
              <em>
                "Architecture, in itself, in its forms, structure, orders and
                progressions, has narrative and theatre already deeply embedded
                in it. This is well known within the discipline. The objective
                of architectural opera is to bring the drama of architecture
                into the public realm in the form of a performing art.
              </em>
            </p>
            <p>
              <em>
                "Unlike cinema or theatre, that focuses on the run and nuance of
                narrative sequence, opera delights in the spectacle of emotion
                and scenography. Operating in the same registers, an
                architectural opera seeks to greatly embellish narrative to
                embellish and make shine the drama and beauty of architecture."
              </em>
            </p>
            <p>
              <Img
                style={{ maxWidth: 700, margin: '0 auto' }}
                fluid={coverImage.childImageSharp.fluid}
              />
            </p>
            <p style={{ maxWidth: 700, margin: '0 auto' }}>
              <iframe
                title="Tirtha Album on Bandcamp"
                style={{
                  margin: '0 auto',
                  border: 0,
                  width: '100%',
                  height: 472,
                }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1692777687/size=large/bgcol=333333/linkcol=e99708/artwork=none/transparent=true/"
                seamless
              >
                <a href="https://jarz0.bandcamp.com/album/tirtha-an-architectural-opera">
                  Tirtha: An Architectural Opera by Jarz0
                </a>
              </iframe>
            </p>
          </div>
        )}
      />
    </div>
  );
};
