import { styled } from '@/styles'

export const TaskContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const TaskForm = styled('form', {
  width: '46rem',
  height: '3.375rem',
  margin: '-1.68rem 0',

  display: 'flex',
  justifyContent: 'space-around',
})

export const Input = styled('input', {
  width: '39.875rem',
  height: '3.375rem',
  backgroundColor: '$gray_500',
  borderRadius: '8px',
  border: 'none',
  color: '$gray_100',
  outline: 'none',
  paddingLeft: '1rem',
})

export const Button = styled('button', {
  width: '5.625rem',
  height: '3.375rem',
  backgroundColor: '$blue-dark',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  span: {
    color: '$gray_100',
    marginRight: '0.5rem',
  },
})
