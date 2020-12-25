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
    container: {
      center: true,
    },
    extend: {
      padding: { "fluid-video": "56.25%" },
      letterSpacing: {
        'fef' : '0.55em',
        'fef-sm' : '0.25em',
      },
      inset: {
        '1/2': '50%'
      },
      height: {
        '18': '4.5rem',
        '22': '5.5rem',
        '1/2': '50%'
      },
      maxWidth: {
        'screen-4xl': '1920px',
        'screen-3xl': '1536px'
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
