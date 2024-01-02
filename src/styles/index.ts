import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      blue: '#4EA8DE',
      'blue-dark': '#1E6F9F',

      purple: '#8284FA',
      'purple-dark': '#5E60CE',

      gray_100: '#F2F2F2',
      gray_200: '#D9D9D9',
      gray_300: '#808080',
      gray_400: '#333333',
      gray_500: '#262626',
      gray_600: '#1A1A1A',
      gray_700: '#0D0D0D',

      danger: '#E25858',
    },
  },
})
