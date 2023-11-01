//Como eu presiso aplicar o css nessa pagina perfil import o css
import './perfil.css'

//Use letra maiuscula para iniciar, pela conversao.
const Perfil = () => {

    const usuario = {
        nome: 'Tales Lima',
        avatar: 'https://github.com/tales1982.png'
    }



    return(
        <div>
            <img className="perfil-avatar" src={usuario.avatar} alt="foto Perfil" />
            <h3>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;

//Agora vai no app e fassa a importacao