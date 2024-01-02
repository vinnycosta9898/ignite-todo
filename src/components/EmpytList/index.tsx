import Image from 'next/image'
import { EmpytListContainer } from './styles'
import logoImg from '../../assets/clipboard.svg'

export function EmpytList() {
  return (
    <EmpytListContainer>
      <Image src={logoImg} alt="Logo de caderneta" />
      <h1>Você ainda não possui tarefas cadastradas </h1>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </EmpytListContainer>
  )
}
