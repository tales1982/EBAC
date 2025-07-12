//Obetendo o json da api do git hub

import { useEffect, useState } from "react";

const ReposList = () => {
const [repos, setRepos] = useState([])

useEffect(() => {
    fetch('https://api.github.com/users/tales1982/repos')
    .then(res => res.json())
    .then(resJson =>{
        setRepos(resJson)
    })
},[]);





    return (
        <ul>
            <li>Repositorios</li>
            
           {/* {repos.map((repositorios) => (*/} 
            {/*desestruturando o codigo*/}
            {repos.map(({id,name,language,html_url}) =>(
                <li key={id}>{/*Meu index vai ser a chave id do gitHub  */}
                   <p>Nome: <b> {name}</b></p>
                    {/*<p>Nome: <b> {repositorios.name}</b></p>*/}
                    <p>Linguagem: <b> {language}</b></p>
                     <a target=" _blank" href={html_url}>Visitar no git</a>
                    <hr />
                </li>
            ))}
            
        </ul>
    )
}

export default ReposList;