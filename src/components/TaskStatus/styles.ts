import { styled } from '@/styles'

export const TaskStatusContainer = styled('div', {
  width: '46rem',
  height: '1.25rem',
  display: 'flex',

  marginTop: '5rem',
})

export const TaskStatusContent = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})

export const TaskCreatedContainer = styled('div', {
  width: '12rem',
  display: 'flex',

  span: {
    color: '$blue',
    marginRight: '0.5rem',
  },
})

export const TaskConcludedContainer = styled('div', {
  width: '12rem',

  display: 'flex',

  span: {
    color: '$purple',
    marginRight: '0.5rem',
  },
})

export const TaskQuantity = styled('div', {
  width: '1.56rem',
  height: '1.25rem',
  backgroundColor: '$gray_400',
  borderRadius: '8px',
  color: '$gray_100',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
