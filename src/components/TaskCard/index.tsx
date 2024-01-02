/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { CheckButton } from '../CheckButton'
import { TaskCardContainer, ButtonContainer, TaskContent, DeleteButton } from './styles'
import { FaRegTrashAlt } from 'react-icons/fa'

interface TaskCardProps {
  id: string
  title: string
  handleConcludedTask: (taskId: string) => void
  handleRemoveTask: (taskId: string) => void
}

export function TaskCard({
  id,
  title,
  handleRemoveTask,
  handleConcludedTask,
}: TaskCardProps) {
  const [isActive, setIsActive] = useState(false)
  return (
    <TaskCardContainer>
      <ButtonContainer onClick={() => setIsActive(!isActive)}>
        <CheckButton id={id} handleConcludedTask={handleConcludedTask}/>
      </ButtonContainer>
      <TaskContent>
        {isActive ? (
          <span style={{ textDecoration: 'line-through' }}>{title}</span>
        ) : (
          <span>{title}</span>
        )}
      </TaskContent>
      <DeleteButton onClick={() => handleRemoveTask(id)}>
        <FaRegTrashAlt size={20} />
      </DeleteButton>
    </TaskCardContainer>
  )
}
