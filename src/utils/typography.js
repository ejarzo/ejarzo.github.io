import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['400', '700'],
    },
    {
      name: 'Source Serif Pro',
      styles: ['400', '700'],
    },
  ],
  baseLineHeight: 1.666,
  baseFontSize: '18px',
  bodyFontFamily: ['Roboto Mono', 'monospace'],
  headerFontFamily: ['Roboto Mono', 'monospace'],
});

export default typography;
