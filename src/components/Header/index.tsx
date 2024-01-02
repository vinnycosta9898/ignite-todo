import Image from 'next/image'
import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo de foguete" />
    </HeaderContainer>
  )
}
