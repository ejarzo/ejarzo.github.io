import React from 'react';

import SiteWrapper from '../components/SiteWrapper.js';
import SEO from '../components/seo.js';
import HeaderV2 from '../components/headerV2.js';

// Links section (hidden for now)
// const obstacleLinks = [
//   { label: 'Bandcamp', href: 'https://obstaclemusic.bandcamp.com/' },
//   {
//     label: 'Spotify',
//     href: 'https://open.spotify.com/artist/4Jf2iLfFvViJO0ApXPDqJ5',
//   },
//   {
//     label: 'Apple Music',
//     href: 'https://music.apple.com/us/artist/obstacle/1445718205',
//   },
//   {
//     label: 'Instagram',
//     href: 'https://www.instagram.com/obstaclemusic/',
//   },
// ];

// const csLinks = [
//   { label: 'Bandcamp', href: 'https://customscenario.bandcamp.com/' },
//   {
//     label: 'Spotify',
//     href:
//       'https://open.spotify.com/artist/1JPX2OvhtUTmpNpD7fkUu5?si=vpgnPtgHQwWch7UlzNEfbg',
//   },
//   {
//     label: 'Apple Music',
//     href: 'https://music.apple.com/us/artist/custom-scenario/1634822469',
//   },
//   {
//     label: 'Instagram',
//     href: 'https://www.instagram.com/custom_scenario/',
//   },
// ];

// const meLinks = [
//   { label: 'Bandcamp', href: 'https://jarz0.bandcamp.com/' },
//   {
//     label: 'Spotify',
//     href:
//       'https://open.spotify.com/artist/6MecZLa2XKXWbPHBNCPgae?si=2cd9skOaQRC_-tiUINqBsg',
//   },
//   {
//     label: 'Apple Music',
//     href: 'https://music.apple.com/us/artist/jarz0/1511222865',
//   },
//   {
//     label: 'Soundcloud',
//     href: 'https://soundcloud.com/jarz0',
//   },
// ];

// Big-artwork Bandcamp embed: size=large with NO artwork=small param.
const embedSrc = (type, id) =>
  `https://bandcamp.com/EmbeddedPlayer/${type}=${id}/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/`;

const covers = [
  {
    title: 'jim + bek — Cast Off / Clock In',
    href: 'https://jimbek.bandcamp.com/album/cast-off-clock-in',
    src: embedSrc('album', '3081530673'),
  },
  {
    title: 'Jarz0 — Time Lapse',
    href: 'https://jarz0.bandcamp.com/album/time-lapse',
    src: embedSrc('album', '3511935603'),
  },
  {
    title: 'Custom Scenario — Depressurized',
    href: 'https://customscenario.bandcamp.com/album/depressurized',
    src: embedSrc('album', '1102896443'),
  },
  {
    title: 'Jarz0 — Static EP',
    href: 'https://jarz0.bandcamp.com/album/static-ep',
    src: embedSrc('album', '4274030742'),
  },
  {
    title: 'Custom Scenario — Treatments EP',
    href: 'https://customscenario.bandcamp.com/album/treatments',
    src: embedSrc('album', '1930129115'),
  },
  {
    title: 'Jarz0 — Face It',
    href: 'https://jarz0.bandcamp.com/track/face-it',
    src: embedSrc('track', '164868995'),
  },
  {
    title: 'Jarz0 — 123',
    href: 'https://jarz0.bandcamp.com/track/123',
    src: embedSrc('track', '905459827'),
  },
  {
    title: 'Custom Scenario — I/O',
    href: 'https://customscenario.bandcamp.com/track/i-o-2',
    src: embedSrc('track', '4103306717'),
  },
  {
    title: 'Custom Scenario — Got To Say',
    href: 'https://customscenario.bandcamp.com/track/got-to-say',
    src: embedSrc('track', '807345591'),
  },
  {
    title: 'Custom Scenario — Given Notice',
    href: 'https://customscenario.bandcamp.com/track/given-notice',
    src: embedSrc('track', '1422168047'),
  },
  {
    title: 'Custom Scenario — Runtime',
    href: 'https://customscenario.bandcamp.com/track/runtime',
    src: embedSrc('track', '2521490290'),
  },
  {
    title: 'Various Artists — Abacusynth Compilation',
    href: 'https://jarz0.bandcamp.com/album/abacusynth-compilation',
    src: embedSrc('album', '752206847'),
  },
  {
    title: 'Jarz0 — By the Time',
    href: 'https://jarz0.bandcamp.com/track/by-the-time',
    src: embedSrc('track', '4271709964'),
  },
  {
    title: 'Jarz0 — Err',
    href: 'https://jarz0.bandcamp.com/track/err',
    src: embedSrc('track', '554973738'),
  },
  {
    title: 'Jarz0 — Aggregator',
    href: 'https://jarz0.bandcamp.com/track/aggregator',
    src: embedSrc('track', '2866174077'),
  },
  {
    title: 'Obstacle — Premonition',
    href: 'https://obstaclemusic.bandcamp.com/album/premonition',
    src: embedSrc('album', '2038906525'),
  },
  {
    title: 'Tirtha, an Architectural Opera',
    href: 'https://jarz0.bandcamp.com/album/tirtha-an-architectural-opera',
    src: embedSrc('album', '1692777687'),
  },
  {
    title: 'Obstacle — Out of Order',
    href: 'https://obstaclemusic.bandcamp.com/track/out-of-order',
    src: embedSrc('track', '3719100812'),
  },
  {
    title: 'Obstacle — Subset EP',
    href: 'https://obstaclemusic.bandcamp.com/album/subset-ep',
    src: embedSrc('album', '1948249255'),
  },
  {
    title: 'Obstacle — First Light / After Image',
    href: 'https://obstaclemusic.bandcamp.com/album/first-light-after-image',
    src: embedSrc('album', '4138191674'),
  },
];

const MusicPage = () => {
  return (
    <SiteWrapper>
      <SEO title="Music" description="My latest music" />
      <HeaderV2 />

      {/* Links section hidden for now */}

      <div
        className="MusicGrid"
        style={{
          // Break out of the centered .SiteWrapper container to go full bleed
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 0,
        }}
      >
        {covers.map(({ title, href, src }) => (
          <iframe
            key={href}
            title={title}
            src={src}
            seamless
            style={{
              border: 0,
              display: 'block',
              width: '100%',
              aspectRatio: '1 / 1',
            }}
          >
            <a href={href}>{title}</a>
          </iframe>
        ))}
      </div>
    </SiteWrapper>
  );
};

export default MusicPage;
