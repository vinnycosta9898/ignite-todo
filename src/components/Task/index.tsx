import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { theme } from '@/styles'
import { TaskContainer, TaskForm, Input, Button } from './styles'
import { CiCirclePlus } from 'react-icons/ci'
import { TaskProps } from '@/pages'

interface ITask {
  handleSaveTask: (task: TaskProps) => void
}

export function Task({ handleSaveTask }: ITask) {
  const [taskInput, setTaskInput] = useState('')

  const task = {
    id: uuidv4(),
    title: taskInput.trim(),
    isConcluded: false,
  }

  function handleSave() {
    setTaskInput('')
    handleSaveTask(task)
  }

  return (
    <TaskContainer>
      <TaskForm onSubmit={() => handleSave()}>
        <Input
          placeholder="Digite uma tarefa"
          onChange={(e) => setTaskInput(e.target.value)}
          value={taskInput}
        />
        <Button>
          <span>Criar</span>
          <CiCirclePlus color={theme.colors.gray_100} size={20} />
        </Button>
      </TaskForm>
    </TaskContainer>
  )
}
