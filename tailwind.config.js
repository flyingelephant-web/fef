module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // currently Sapper dev server chokes on this
    // applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    fontFamily: {
      'fef': ['pb-bold'],
      'fontfilm': ['fontfilm'],
      'pb-regular': ['pb-regular'],
      'playfair': ['Playfair Display']
    },
    letterSpacing: {
      'fef' : '0.55em'
    },
    container: {
      center: true,
    },
    extend: {
      padding: { "fluid-video": "56.25%" }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
