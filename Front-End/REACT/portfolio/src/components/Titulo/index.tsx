import { Titulo as TituloStilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloStilo fontSize={props.fontSize}>{props.children}</TituloStilo>
)

export default Titulo
