import {
  TaskStatusContainer,
  TaskStatusContent,
  TaskCreatedContainer,
  TaskConcludedContainer,
  TaskQuantity,
} from './styles'

interface TaskStatusProps {
  tasksCreatedAmount: number
  tasksConcludedAmount: number
}

export function TaskStatus({
  tasksCreatedAmount,
  tasksConcludedAmount,
}: TaskStatusProps) {
  return (
    <TaskStatusContainer>
      <TaskStatusContent>
        <TaskCreatedContainer>
          <span>Tarefas Criadas</span>
          <TaskQuantity>{tasksCreatedAmount}</TaskQuantity>
        </TaskCreatedContainer>
        <TaskConcludedContainer>
          <span>Tarefas Concluídas</span>
          <TaskQuantity>{tasksConcludedAmount}</TaskQuantity>
        </TaskConcludedContainer>
      </TaskStatusContent>
    </TaskStatusContainer>
  )
}
