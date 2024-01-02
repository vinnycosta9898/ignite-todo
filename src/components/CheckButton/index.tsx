import { useState } from 'react'
import { CheckButtonContainer } from './styles'
import { FaCheck } from 'react-icons/fa'
import { theme } from '@/styles'

interface CheckButtonProps {
  id: string
  handleConcludedTask: (taskId: string) => void
}

export function CheckButton({ id, handleConcludedTask }: CheckButtonProps) {
  const [isActive, setIsActive] = useState(false)

  function handleActive() {
    setIsActive(!isActive)
    handleConcludedTask(id)
  }
  return (
    <CheckButtonContainer
      onClick={() => handleActive()}
      data-active={isActive.toString()}
    >
      {isActive ? <FaCheck color={theme.colors.gray_100} /> : ''}
    </CheckButtonContainer>
  )
}
