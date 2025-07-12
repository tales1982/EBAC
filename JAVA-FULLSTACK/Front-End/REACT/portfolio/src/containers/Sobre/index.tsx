import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem iParagrafosum dolor sit amet consectetur, adipisicing elit. Officia
      aliquam fugiat sequi temporibus dicta cupiditate expedita! Aut iusto
      dolorum non quod tenetur accusamus dolorem libero architecto veniam.
      Eligendi, recusandae eius?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Tales1982&show_icons=true&theme=tokyonight" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tales1982&layout=compact&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
