import styled from 'styled-components'

//Estilazando Botao
type BotaoProps = {
  principal: boolean //endica que e verdadeiro se tiver um botao ele aplicar o css
  tamanhoFontes?: string
}

//Tenho que passar as propriedades do botao
//Sobre a fonte se eu nao passar um tamanho ela vai aplicar o 16px o tamanho posso passar diretamente no butao
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.tamanhoFontes || '16px'};
`
//utilizando erança do butao pra outro butao
// Posso usar a indetacao do sass para estilizar meus elementos exemplo no span detro di butao
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    font-size: 22px;
    color: #fff;
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao principal={false}>Clique aqui</Botao>
      <Botao as={'a'} tamanhoFontes="20px" principal>
        {/*utilizando o as={} posso altera alterar uma tag  neste casso estou mudando o butao para link */}
        <span>Clique aqui</span>
      </Botao>
      <BotaoPerigo principal>
        <span>Perigo nao clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
