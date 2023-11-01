//Importacoes pra manipular o DOM
import { useState, useEffect } from "react";

const Formulario = () => {
  //Estrutura de codigo para recerber o valor de um input
  //MateriaA vai armasena o valor que setMateriaA vai receber la no formulario.
  //=============== UseState ===============
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  //============== UseEffect ================
  /*useEffect é um gancho (hook) do React que é usado para lidar com efeitos colaterais em componentes funcionais.
     Efeitos colaterais são operações que acontecem fora do ciclo de renderização normal de um componente,
    como busca de dados em uma API, manipulação do DOM, inscrição em eventos, entre outros. */
  useEffect(() => {
    console.log("O estado mudou");
  }, [nome]);

  useEffect(() => {
    console.log("A materia A mudou para " + materiaA);
  }, [materiaA]);

  //Vou criar uma condicao pra ver se meu formulario vai ser valido ou nao
  useEffect(() => {
    console.log("O componente iniciou");

    return () => {
      console.log("O componente finalizou");
    };
  }, []);

  // =========== funcao pra pegar o nome ===========
  const alteraNome = (evento) => {
    setNome(evento.target.value);
  };

  // =========== Calculando a Media ===========
  const media = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    //Posso retorna diretamente uma tag
    if (media >= 7) {
      return (
        <p>
          Ola {nome}, voce foi aprovado com a media de {media.toFixed(1)}
        </p>
      );
    } else {
      return (
        <p>
          Ola {nome}, voçe foi reprovado com a media de {media.toFixed(1)}
        </p>
      );
    }
  };

  return (
    <form>
        <p>Pecorrendo um Array com map()</p>
      <ul>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>

      <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota materia A"
        onChange={(evento) => setMateriaA(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota materia B"
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota materia C"
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
      />
      <p>Valores Recebido do Input</p>

      <p>Valor input A = {materiaA}</p>
      <p>Tambem posso usar a desustruturacao pra obter o valar materiaB</p>
      <p>Valor input B = {materiaB}</p>
      <p>Valor input C = {materiaC}</p>
      <p>Calculando a Media</p>
      {media()}
      <p>Posso utilize tambem a função useEffect para manipular o estado do</p>
    </form>
  );
};

export default Formulario;
