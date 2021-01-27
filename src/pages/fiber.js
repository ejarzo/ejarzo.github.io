import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "fiber-banner.jpg" }) {
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
        title="Fiber"
        bannerImage={bannerImage}
        links={[
          {
            label: 'Dev Blog',
            href:
              'https://medium.com/the-open-music-initiative/fiber-bringing-the-story-of-a-song-to-life-8a854de8fad9',
          },
        ]}
        Content={() => (
          <div>
            <p>
              Fiber is an interactive VR experience that allows you to “step
              inside a song” and discover its full story, contributors and
              context.
            </p>
            <p>
              Fiber is the result of a two month Summer Lab at the{' '}
              <a href="http://open-music.org/" target="blank">
                Open Music Initiative
              </a>
              , which is a partnership between{' '}
              <a href="https://www.ideo.com" target="blank">
                IDEO
              </a>{' '}
              and{' '}
              <a href="https://www.berklee.edu/" target="blank">
                Berklee College of Music
              </a>
              . The OMI mission is to create an "open-source protocol for the
              uniform identification of music rights holders and creators." This
              currently manifests itself as an API that can be used to register
              and query information. Our job in the Summer Lab was to imagine a
              future where this information is open and accessible.
            </p>
            <p>
              Our team took on the challenge of "identifying individuals for
              their contributions to single tracks in new works." We expanded on
              the prompt and focused on interactively telling the whole story of
              a song.
            </p>
            <p className="MediaWrapper">
              <div style={{ padding: '61.02% 0 0 0', position: 'relative' }}>
                <iframe
                  title="Radiohead - Reckoner Cube Explosion"
                  src="https://player.vimeo.com/video/225468485?color=eee&byline=0&portrait=0"
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
              One of our early prototypes was a cube that could be exploded into
              shards. Each piece represented an element of the song, whether
              that be the guitar part or the person who mastered the track.
            </p>
            <p className="MediaWrapper">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  title="Fiber Demo"
                  src="https://player.vimeo.com/video/227336595?color=eee&byline=0&portrait=0"
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
              For our next iteration we focused on telling the story of a song
              instead of simply assembling information about it. We chose 'Same
              Drugs' by Chance the Rapper and crafted a virtual reality
              environment that the user can interact with to discover the
              narrative and context behind the music.{' '}
            </p>
            <p>
              For more information about our ideas and development, check out
              our articles that we wrote throughout the process:
            </p>
            <p>
              <a
                href="https://medium.com/the-open-music-initiative/stepping-inside-a-song-2bd3ddc71d54"
                target="blank"
              >
                Part 1: Stepping Inside a Song
              </a>
              <br />
              <a
                href="https://medium.com/the-open-music-initiative/playing-with-music-2614d8e61cb3"
                target="blank"
              >
                Part 2: Playing With Music
              </a>
              <br />
              <a
                href="https://medium.com/the-open-music-initiative/so-the-story-goes-bf7981212870"
                target="blank"
              >
                Part 3: So The Story Goes
              </a>
              <br />
              <a
                href="https://medium.com/the-open-music-initiative/fiber-bringing-the-story-of-a-song-to-life-8a854de8fad9"
                target="blank"
              >
                Part 4: Fiber: Bringing The Story of a Song To Life
              </a>
            </p>
            <p>
              <a
                href="https://medium.com/the-open-music-initiative"
                target="blank"
              >
                Read the OMI publication
              </a>
            </p>
            <p>
              <strong>Tools:</strong> Unity3D, D3.js
            </p>
          </div>
        )}
      />
    </div>
  );
};
