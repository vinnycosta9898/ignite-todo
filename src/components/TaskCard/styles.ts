import { styled } from '@/styles'

export const TaskCardContainer = styled('div', {
  width: '46rem',
  height: '4.5rem',
  backgroundColor: '$gray_500',
  borderRadius: '8px',
  padding: '0 1rem',
  marginTop: '1rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ButtonContainer = styled('button', {
  background: 'none',
  border: 'none',
})

export const TaskContent = styled('div', {
  padding: '0 1rem',
  span: {
    color: '$gray_100',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    witheSpace: 'nowrap',
  },
})

export const DeleteButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',

  svg: {
    color: '$gray_100',
    '&:hover': {
      color: '$danger',
    },
  },
})
