import { globalCss } from '.'

export const globalStyle = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    textDecoration: 'none',
  },

  body: {
    backgroundColor: '$gray_600',
  },
})
