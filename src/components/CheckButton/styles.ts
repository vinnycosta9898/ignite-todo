import { styled } from '@/styles'

export const CheckButtonContainer = styled('button', {
  width: '1.5rem',
  height: '1.5rem',
  background: 'none',
  border: '1px solid $blue',
  borderRadius: '999px',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-active="true"]': {
    backgroundColor: '$purple',
  },
})
