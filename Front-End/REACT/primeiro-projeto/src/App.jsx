import { useState } from "react";

//Importando o perfil
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposListGit";


function App() {
//usando uma variavel direto.
  const nome = 'Tales';

//chamando uma funcao
   function retornaNome(){
    return `Ola ${nome} seja bem vindo`
   }
//Usando objeto
const pessoa = {
  nome:'Theo',
  idade: 2,
}
//Chamando o objeto pela arrow function
const hello = () => `Ola ${pessoa.nome} sja bem vindo`
//tambem posso ussar uma condicao dentro das tag (ternario)
let estaDeDia = false;


//===== Validaçao do formulario ======
const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return (
    <>
    <h1>Titulo</h1>
   <h2>Subtitulo</h2>
   <p>Ola {nome}</p>
   <p>{retornaNome()}, aqui no site</p>
   <p>{hello()}</p>
   <p> {estaDeDia ? 'Bom Dia': 'Boa Noite'}</p>
    <Perfil />
    <ReposList />
   {/*Comentario dentro do return */}

   
    <h2>Trabalhando com formularios</h2>
    { formularioEstaVisivel && <Formulario />
    
    }
    <button onClick={()=>setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Mostra / Oculta</button >
    </>
   
  )
}

export default App
