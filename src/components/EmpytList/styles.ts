import { styled } from '@/styles'

export const EmpytListContainer = styled('div', {
  width: '46rem',
  height: '22rem',
  borderTop: '1px solid $gray_400',
  borderRadius: '8px',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  img: {
    marginBottom: '1rem',
  },

  h1: {
    color: '$gray_300',
  },

  span: {
    color: '$gray_300',
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
})
