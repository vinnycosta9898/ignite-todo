/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import { HomeContainer } from '@/styles/app'
import { Header } from '@/components/Header'
import { Task } from '@/components/Task'
import { TaskStatus } from '@/components/TaskStatus'
import { EmpytList } from '@/components/EmpytList'
import { TaskCard } from '@/components/TaskCard'
import { toast } from 'react-toastify'

export interface TaskProps {
  id: string
  title: string
  isConcluded: boolean
}

export default function Home() {
  const [taskCreate, setTaskCreate] = useState(false)
  const [taskRemoved, setTaskRemoved] = useState(false)
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleSaveTask(task: TaskProps) {
    event?.preventDefault()
    if (!task.title) {
      toast.warning('Digite uma tarefa')
      return
    }
    const taskSaved = localStorage.getItem('@ignite-todo')
    const taskList = JSON.parse(taskSaved || '[]')
    const taskSavedOnList = taskList.some((taskSave: TaskProps) => {
      return taskSave.title === task.title
    })

    if (taskSavedOnList) {
      toast.warning('Tarefa já salva')
      return
    }

    taskList.push(task)
    localStorage.setItem('@ignite-todo', JSON.stringify(taskList))
    toast.success('Tarefa salva com sucesso')
    setTaskCreate(!taskCreate)
  }

  function getAllTasksSaved() {
    const taskSaved = localStorage.getItem('@ignite-todo')
    const taskList = JSON.parse(taskSaved || '[]')
    setTasks(taskList)
  }

  function handleRemoveTask(taskId: string) {
    const taskSaved = localStorage.getItem('@ignite-todo')
    const taskList = JSON.parse(taskSaved || '[]')
    const taskFiltered = taskList.filter(
      (task: TaskProps) => task.id !== taskId,
    )
    localStorage.setItem('@ignite-todo', JSON.stringify(taskFiltered))
    toast.success('Tarefa Removida com sucesso')
    setTaskRemoved(!taskRemoved)
  }

  function handleConcludedTask(taskId: string) {
    const taskList = [...tasks]

    const updatedTasks = taskList.map((task: TaskProps) => {
      if (task.id === taskId) {
        return {
          ...task,
          isConcluded: !task.isConcluded,
        }
      }
      return task
    })

    setTasks(updatedTasks)

    localStorage.setItem('@ignite-todo', JSON.stringify(updatedTasks))
  }

  const amountTasksConcluded = tasks.filter((task) => task.isConcluded)

  useEffect(() => {
    getAllTasksSaved()
  }, [taskCreate, taskRemoved])

  return (
    <HomeContainer>
      <Header />
      <Task handleSaveTask={handleSaveTask} />
      <TaskStatus
        tasksCreatedAmount={tasks.length}
        tasksConcludedAmount={amountTasksConcluded.length}
      />
      {tasks.length === 0 ? (
        <EmpytList />
      ) : (
        tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              handleRemoveTask={handleRemoveTask}
              handleConcludedTask={handleConcludedTask}
            />
          )
        })
      )}
    </HomeContainer>
  )
}
