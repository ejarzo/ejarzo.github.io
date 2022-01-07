import React from 'react';

export default ({ src, title, ...rest }) => (
  <div class="iframe-container">
    <iframe
      class="responsive-iframe"
      frameborder="0"
      src={src}
      title={title}
      allow="autoplay; fullscreen"
      allowfullscreen
      {...rest}
    ></iframe>
  </div>
);
