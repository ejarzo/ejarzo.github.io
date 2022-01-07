import React from 'react';
import Link from 'gatsby-link';

import SiteWrapper from '../components/SiteWrapper.js';
import SEO from '../components/seo.js';
import HeaderV2 from '../components/headerV2.js';

const obstacleLinks = [
  { label: 'Website', href: 'https://obstaclemusic.com/' },
  { label: 'Bandcamp', href: 'https://obstaclemusic.bandcamp.com/' },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/4Jf2iLfFvViJO0ApXPDqJ5',
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/obstacle/1445718205',
  },
  {
    label: 'Soundcloud',
    href: 'https://soundcloud.com/weareobstacle',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obstaclemusic/',
  },
];

const meLinks = [
  { label: 'Bandcamp', href: 'https://jarz0.bandcamp.com/' },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/0Si7RnGwNEWeH1AhYgzyW4',
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/jarz0/1511222865',
  },
  {
    label: 'Soundcloud',
    href: 'https://soundcloud.com/jarz0',
  },
];

export default () => {
  const entries = [
    {
      date: 'Nov 12, 2021',
      title: 'Jarz0 — Err',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://jarz0.bandcamp.com/track/err',
        },
        {
          label: 'Spotify',
          href:
            'https://open.spotify.com/track/6T0G68Qt036otVsmhoHWSz?si=8f7d00ea289a4ba6',
        },
        {
          label: 'Other',
          href: 'https://linktr.ee/jarz0',
        },
      ],
      content: (
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=554973738/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://jarz0.bandcamp.com/track/err">Err by Jarz0</a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'July 23, 2021',
      title: 'Jarz0 — Aggregator',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://jarz0.bandcamp.com/track/aggregator',
        },
        {
          label: 'Spotify',
          href:
            'https://open.spotify.com/track/2MQff7ujgvTDKVHMxN0WZY?si=32f573ab8fed43a0',
        },
        {
          label: 'Other',
          href: 'https://linktr.ee/jarz0',
        },
      ],
      content: (
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=2866174077/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://jarz0.bandcamp.com/track/aggregator">
              Aggregator by Jarz0
            </a>
          </iframe>
        </div>
      ),
    },

    {
      date: 'Feb 5, 2021',
      title: 'Obstacle — Premonition',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://obstaclemusic.bandcamp.com/album/premonition',
        },
        {
          label: 'Spotify',
          href:
            'https://open.spotify.com/track/0xSoSCP2rc5zjIFF8Mq7bD?si=80a1c201ae2d42b6',
        },
      ],
      content: (
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2038906525/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://obstaclemusic.bandcamp.com/album/premonition">
              Premonition by Obstacle
            </a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'Feb 3, 2021',
      title: 'Obstacle — Live at the Tubs',
      links: [],
      content: (
        <div>
          <iframe
            width="728"
            height="410"
            src="https://www.youtube.com/embed/wBuoUYoq9aM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    {
      date: 'Dec 18, 2020',
      title: 'Tirtha, an Architectural Opera',
      links: [
        // {
        //   label: 'Office of Uncertainty Research',
        //   href: 'https://www.officeofuncertaintyresearch.org/tirtha-opera',
        // },
        {
          label: 'Bandcamp',
          href:
            'https://jarz0.bandcamp.com/album/tirtha-an-architectural-opera',
        },
        {
          label: 'Spotify',
          href:
            'https://open.spotify.com/album/3yYl5QEup6S4iCA0Btw9Vt?si=5pB2eJEMSYWAWzgyHocBcw&dl_branch=1',
        },
        {
          label: 'Opera',
          href: 'https://vimeo.com/476512339',
        },
      ],
      content: (
        <div>
          <p>
            “Tirtha: An Architectural Opera” is a collaboration with the{' '}
            <a href="https://www.officeofuncertaintyresearch.org/">
              {' '}
              Office of Uncertainty Research
            </a>{' '}
            to present architecture as a multimedia experience. This album,
            along with video, artwork, and architectural design, imagines a
            site-specific "Recomposting Center" -- a burial place where human
            bodies are composted. It is the story of cycles, of something
            becoming something else.
          </p>
          <p>
            You can read more about the project and watch the full opera{' '}
            <Link to="/tirtha">here</Link>.
          </p>
          <iframe
            style={{ border: 0, width: 700, height: 472 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1692777687/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://jarz0.bandcamp.com/album/tirtha-an-architectural-opera">
              Tirtha: An Architectural Opera by Jarz0
            </a>
          </iframe>
        </div>
      ),
    },
  ];

  return (
    <SiteWrapper>
      <SEO title="Music" />
      <HeaderV2 />

      <div className="row border--dashed" style={{ marginBottom: '2rem' }}>
        <div className="col-12">
          <p>
            Solo work
            <br />
            {meLinks.map(({ label, href }, i) => (
              <span>
                <a href={href} target="blank">
                  {label}
                </a>
                {i < meLinks.length - 1 && ' / '}
              </span>
            ))}
          </p>
          <p style={{ margin: 0 }}>
            Obstacle (with{' '}
            <a href="https://www.anniemurnighan.com/">Annie Murnighan</a> and{' '}
            <a href="https://twitter.com/amos_copy">Amos Damroth</a>)<br />
            {obstacleLinks.map(({ label, href }, i) => (
              <span>
                <a href={href} target="blank">
                  {label}
                </a>
                {i < obstacleLinks.length - 1 && ' / '}
              </span>
            ))}
          </p>
        </div>
      </div>

      {entries.map(({ date, title, links, content }) => (
        <div className="row">
          <div className="col-12">
            <p
              class="text--monospace"
              style={{ marginBottom: '1em', fontSize: '0.8em' }}
            >
              {date}
            </p>
            <h3 style={{ marginBottom: 0 }}>{title}</h3>
            <p class="text--monospace text--uppercase">
              {links.map(({ label, href }, i) => (
                <span>
                  <a href={href} target="blank">
                    {label}
                  </a>
                  {i < links.length - 1 && ' / '}
                </span>
              ))}
            </p>
            {content}
          </div>
        </div>
      ))}

      {/* <div className="row">
        <div className="col-12">
          <p>
            Listen to more of my music on Bandcamp, Spotify, Apple Music, etc...
            Search 'Jarz0' or 'Obstacle'
          </p>
        </div>
      </div> */}
    </SiteWrapper>
  );
};
