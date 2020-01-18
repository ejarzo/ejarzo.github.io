import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Inconsolata',
      styles: ['400', '700'],
    },
    {
      name: 'Source Serif Pro',
      styles: ['400', '700'],
    },
  ],
  baseLineHeight: 1.666,
  baseFontSize: '18px',
  bodyFontFamily: ['Inconsolata', 'monospace'],
  headerFontFamily: ['Inconsolata', 'monospace'],
});

export default typography;
