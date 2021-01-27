import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "fiber-screenshot.png" }) {
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
              As part of a Summer Lab at the{' '}
              <a href="http://open-music.org/" target="blank">
                Open Music Initiative
              </a>{' '}
              I worked with a team to imagine a situation where information
              regarding music rights-holders creators is open and accessible.
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
              that be the guitar part that you can hear in isolation or the
              influences behind a certain phrase.
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
              For our final iteration we focused on telling the story of a song
              instead of simply assembling information about it. We crafted a
              virtual environment for the song 'Same Drugs' by Chance the Rapper
              that the user could interact with to discover the narrative and
              context behind the music.
            </p>
          </div>
        )}
      />
    </div>
  );
};
