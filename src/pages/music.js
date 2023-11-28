import React from 'react';
import Link from 'gatsby-link';

import SiteWrapper from '../components/SiteWrapper.js';
import SEO from '../components/seo.js';
import HeaderV2 from '../components/headerV2.js';
import { graphql, useStaticQuery } from 'gatsby';

const obstacleLinks = [
  // { label: 'Website', href: 'https://obstaclemusic.com/' },
  { label: 'Bandcamp', href: 'https://obstaclemusic.bandcamp.com/' },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/4Jf2iLfFvViJO0ApXPDqJ5',
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/obstacle/1445718205',
  },
  // {
  //   label: 'Soundcloud',
  //   href: 'https://soundcloud.com/weareobstacle',
  // },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obstaclemusic/',
  },
];

const csLinks = [
  { label: 'Bandcamp', href: 'https://customscenario.bandcamp.com/' },
  {
    label: 'Spotify',
    href:
      'https://open.spotify.com/artist/1JPX2OvhtUTmpNpD7fkUu5?si=vpgnPtgHQwWch7UlzNEfbg',
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/custom-scenario/1634822469',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/custom_scenario/',
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

const MusicPage = () => {
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
  } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "texturizer-banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  `);
  const entries = [
    {
      date: 'July 7, 2023',
      title: 'Jarz0 — 123',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://jarz0.bandcamp.com/track/123',
        },
      ],
      content: (
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=905459827/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://jarz0.bandcamp.com/track/123">123 by Jarz0</a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'June 23, 2023',
      title: 'Custom Scenario — I/O',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://customscenario.bandcamp.com/track/i-o-2',
        },
        {
          label: 'Streaming',
          href: 'https://distrokid.com/hyperfollow/customscenario/io',
        },
      ],
      content: (
        <div>
          {/* <iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track=4103306717/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://customscenario.bandcamp.com/track/i-o-2">I/O by Custom Scenario</a></iframe> */}
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=4103306717/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://customscenario.bandcamp.com/track/i-o-2">
              I/O by Custom Scenario
            </a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'April 21, 2023 ',
      title: 'Custom Scenario — Got To Say',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://customscenario.bandcamp.com/track/got-to-say',
        },
        {
          label: 'Streaming',
          href: 'https://distrokid.com/hyperfollow/customscenario/got-to-say',
        },
      ],
      content: (
        <div>
          {/* <iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track=807345591/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://customscenario.bandcamp.com/track/got-to-say">Got to Say by Custom Scenario</a></iframe> */}
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=807345591/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://customscenario.bandcamp.com/track/got-to-say">
              Got To Say by Custom Scenario
            </a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'August 2022',
      title: 'Custom Scenario — Live at Sonar Flare',
      links: [],
      content: (
        <div>
          <iframe
            width="728"
            height="410"
            src="https://www.youtube.com/embed/6BTkf6ANyT4/?t=40"
            title="Custom Scenario [Sonar Flare 2022]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ),
    },
    ,
    {
      date: 'Jan 27, 2023',
      title: 'Custom Scenario — Given Notice',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://customscenario.bandcamp.com/track/given-notice',
        },
        {
          label: 'Streaming',
          href: 'https://distrokid.com/hyperfollow/customscenario/given-notice',
        },
      ],
      /* 
      <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1422168047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://customscenario.bandcamp.com/track/given-notice">Given Notice by Custom Scenario</a></iframe>
      */
      content: (
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=1422168047/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://customscenario.bandcamp.com/track/runtime">
              Given Notice by Custom Scenario
            </a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'Jul 29, 2022',
      title: 'Custom Scenario — Runtime',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://customscenario.bandcamp.com/track/runtime',
        },
        {
          label: 'Streaming',
          href: 'https://distrokid.com/hyperfollow/customscenario/runtime',
        },
      ],
      content: (
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=2521490290/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://customscenario.bandcamp.com/track/runtime">
              Runtime by Custom Scenario
            </a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'Apr 22, 2022',
      title: 'Various Artists — Abacusynth Compilation',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://jarz0.bandcamp.com/album/abacusynth-compilation',
        },
      ],
      content: (
        <div>
          <p>
            A compilation of songs made using the{' '}
            <Link to="/abacusynth-plugin">Abacusynth</Link> Plugin.
          </p>
          <iframe
            style={{ border: 0, width: '100%', height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=752206847/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://jarz0.bandcamp.com/album/abacusynth-compilation">
              Abacusynth Compilation by Various Artists
            </a>
          </iframe>
        </div>
      ),
    },
    {
      date: 'Feb 25, 2022',
      title: 'Jarz0 — By the Time',
      links: [
        {
          label: 'Bandcamp',
          href: 'https://jarz0.bandcamp.com/track/by-the-time',
        },
        {
          label: 'Spotify',
          href:
            'https://open.spotify.com/album/2bdsjIMyDUT6kU55Qgfpm5?si=PhMjnQm8RU2LV9h0-LpWIQ',
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
            src="https://bandcamp.com/EmbeddedPlayer/track=4271709964/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://jarz0.bandcamp.com/track/by-the-time">
              By the Time by Jarz0
            </a>
          </iframe>
        </div>
      ),
    },
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
            title="Err by Jarz0"
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
            title="Aggregator by Jarz0"
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
            title="Premonition by Obstacle"
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
            title="Obstacle — Live at the Tubs"
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
            title="Tirtha by Jarz0"
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
      {/* <div
        className="Projects__ImgContainer"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--black)',
          }}
        >
          <Img
            fluid={bannerImage.childImageSharp.fluid}
            style={{
              userSelect: 'none',
              objectFit: 'cover',
              filter: 'blur(100px) brightness(0.6) saturate(0.8)',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div> */}
      <SEO title="Music" description="My latest music" />
      <HeaderV2 />
      {/* <h2 style={{ marginTop: 0 }}>Music</h2> */}
      <div
        className="row border--dashed"
        style={{
          marginBottom: '2rem',
          maxWidth: 720,
          margin: '0 auto',
          background: 'var(--white)',
          padding: '2px 40px',
          borderRadius: 4,
          // border: '1px solid var(--white)',
          // color: 'var(--black)',
          // paddingTop: '1em',
        }}
      >
        <p>
          <strong style={{ fontSize: '1.5em' }}>Solo Work</strong>
          <br />
          <div className="ProjectPage__Links" style={{ marginTop: 8 }}>
            {meLinks.map(({ label, href }, i) => (
              <a
                className={`btn btn--inverted`}
                target="blank"
                key={label}
                href={href}
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </p>
        <p>
          <strong style={{ fontSize: '1.5em' }}>Custom Scenario</strong> (with{' '}
          <a href="https://twitter.com/amos_copy">Amos Damroth</a>)<br />
          <div className="ProjectPage__Links" style={{ marginTop: 8 }}>
            {csLinks.map(({ label, href }, i) => (
              <a
                className={`btn btn--inverted`}
                target="blank"
                key={label}
                href={href}
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </p>
        <p>
          <strong style={{ fontSize: '1.5em' }}>Obstacle</strong> (with{' '}
          <a href="https://www.anniemurnighan.com/">Annie Murnighan</a> and{' '}
          <a href="https://twitter.com/amos_copy">Amos Damroth</a>)<br />
          <div className="ProjectPage__Links" style={{ marginTop: 8 }}>
            {obstacleLinks.map(({ label, href }, i) => (
              <a
                className={`btn btn--inverted`}
                target="blank"
                key={label}
                href={href}
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </p>
      </div>

      {entries.map(({ date, title, links, content }) => (
        <div className="row">
          <div className="col-12" style={{ marginBottom: 0 }}>
            <p
              class="text--monospace"
              style={{ marginBottom: '8px', fontSize: '0.8em', opacity: 0.8 }}
            >
              {date}
            </p>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>{title}</h3>
            <p
              class="text--monospace text--uppercase"
              style={{ marginTop: '8px' }}
            >
              {links.map(({ label, href }, i) => (
                <span>
                  <a href={href} target="blank">
                    {label}
                  </a>
                  {i < links.length - 1 && ' / '}
                </span>
              ))}
            </p>
            <p>{content}</p>
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

export default MusicPage;
