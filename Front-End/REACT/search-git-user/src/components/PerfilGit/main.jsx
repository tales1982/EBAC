import { useEffect, useState } from "react";
import "./main.css";



const PerfilGit = () => {
    const [repos, setRepos] = useState([])
    const [nomeGit, setNomeGit] = useState()
    const avatarLink = `https://github.com/${nomeGit}.png`;

console.log(nomeGit)
    const FuncaoCapturaNome = (evento) => {
        setNomeGit(evento.target.value)
        

    }

    //Requescao do API GIt
    useEffect(()=>{
        fetch(`https://api.github.com/users/${nomeGit}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson)
        })
        .catch((error)=>{
        console.error("Erro na requisição à API do GitHub:", error);
        setRepos([]); // Define repos como um array vazio em caso de erro
        })
    },[nomeGit]);


    const exebirAvatar = () => {
        if (nomeGit && avatarLink) {
          return <img src={avatarLink} alt="avatar user" className="avatar--img" />;
        } else {
          return '';
        }
      }

    return(
        <div className="divForm">
            <form className="centerForm">
                <h2>Hello, which user are you looking for?</h2>
                <input
          onChange={FuncaoCapturaNome}
          type="text"
          id="userNameGit"
          placeholder="Enter user name.."
          className="form-control centerForm--input"
        />
            </form>
            <section className="">
                <div className="avatar">
                    <h2>welcome {nomeGit}</h2>
                      {exebirAvatar()}
                </div>
                
            
                <ul className="ul">
                    <li className="ul--li ul--li--h2" > <h2>Result</h2></li>
                    {repos.map(({id,name,language,html_url})=>(
                        <li key={id} className="ul--li" > <p className="ul--li--p">Nome : <b>{name}</b></p>
                        <p className="ul--li--p">Linguagem : <b>{language}</b> </p>
                        <p className="ul--li--p"> <a target=" _blank" href={html_url}>Visite no Git</a></p>
                        </li>
                    ))}
                    
                </ul>
            </section>
            <footer className="footer">
                <div ><p> 2023 © <a href="https://www.linkedin.com/in/tales-lima-de-paula-9b0959299/" target=" _black">Tales Lima</a>  - Todos os direitos reservados </p></div></footer>
        </div>
    );
}

export default PerfilGit;