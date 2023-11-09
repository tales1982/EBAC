import Projeto from './containers/Projetos'
import Sidebar from './containers/Siderbar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projeto />
        </main>
      </Container>
    </>
  )
}

export default App
