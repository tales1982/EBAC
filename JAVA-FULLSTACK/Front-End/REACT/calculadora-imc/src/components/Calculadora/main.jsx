import { useState } from "react";
import style from "./Calculadora.module.css";

const Calculadora = () => {
  const [valorPeso, setValorPeso] = useState("");
  const [valorAltura, setValorAltura] = useState("");
  const [resultadoFinal, setResultadoFinal] = useState(0);
  const [erro, setErro] = useState("");

  const calcularIMC = () => {
    if (valorPeso && valorAltura) {
      const resultado = valorPeso / (valorAltura * valorAltura);
      setResultadoFinal(resultado);
      setErro(""); // Limpa a mensagem de erro
    } else {
      setErro("Por favor, preencha todos os campos."); // Define a mensagem de erro
    }
  };

  const ImprimirRes = (resultadoFinal) => {
    if (resultadoFinal > 1 && resultadoFinal <= 18.5) {
        return (
          <div className={style.resultadoAmarelho}>
            <p>Seu IMC é de {resultadoFinal.toFixed(1)}Você esta abaixo do Peso</p>
          </div>
        );
      }else if(resultadoFinal > 18.6 && resultadoFinal <= 24.9){
        return(
            <div className={style.resultadoVerde}>
        <p >Seu IMC é de {resultadoFinal.toFixed(1)} Você esta no peso normal.</p>
      </div>
        )
      }else if(resultadoFinal >= 25 && resultadoFinal <= 29.9){
        return(
            <div className={style.resultadoLaranja}>
            <p >Seu IMC é de {resultadoFinal.toFixed(1)} Você esta com execesso de peso.</p>
      </div>
        )
      }else if(resultadoFinal >= 30 && resultadoFinal <= 34.9){
        return(
            <div className={style.resultadoVermelho1}>
            <p >Seu IMC é de {resultadoFinal.toFixed(1)} Você esta com Obesidade de Grau I.</p>
      </div>
        )
      }
      else if(resultadoFinal >= 35&& resultadoFinal <= 39.9){
        return(
            <div className={style.resultadoVermelho2}>
            <p >Seu IMC é de {resultadoFinal.toFixed(1)} Você esta com Obesidade de Grau II.</p>
      </div>
        )
      }
      else if(resultadoFinal >= 40){
        return(
            <div className={style.resultadoVermelho3}>
            <p >Seu IMC é de {resultadoFinal.toFixed(1)} Você esta com Obesidade de Grau III.</p>
      </div>
        )
      }else if(resultadoFinal == undefined){
        return(
            <div className={style.resultadoVermelho3}>
            <p >Digite um valor valido</p>
      </div>
        )
      }
      else{
        return('')
      }
  };

 
  return (
    <div className={style.bodyCalc}>
      <h2 className={style.bodyCalcH2}>IMC</h2>
      <form className={style.form}>
        <div className={style.divForm}>
          <label htmlFor="peso">PESO :</label>
          <input
            onChange={(evento) => setValorPeso(evento.target.value)}
            type="number"
            id="peso" 
            placeholder="Valor permitido 00.0"
          />
        </div>
        <div className={style.divForm}>
          <label htmlFor="altura">ALTURA :</label>
          <input
            onChange={(evento) => setValorAltura(evento.target.value)}
            type="number"
            id="altura" 
            placeholder="Valor permitido 0.00"
          />
        </div>
        {erro && <p className={style.erro}>{erro}</p>} {/* Exibe a mensagem de erro se houver */}
        <button
          type="button"
          id="calculaIMC"
          className={style.calcularIMC}
          onClick={calcularIMC}
        >
          CALCULAR
        </button>
        <div className={style.result}>
          <ul className={style.resultUl}>
            <div className={style.divLi1}>
              <li className={style.resultUlLiHeader}>IMC</li>
              <li className={`${style.resultUlLi} ${style.amarelo}`}>
                IMC {"<"} 18,5 Kg/m2
              </li>
              <li className={`${style.resultUlLi} ${style.verde}`}>
                18,5 a 24,9
              </li>
              <li className={`${style.resultUlLi} ${style.laranja}`}>
                25 a 29,9
              </li>
              <li className={`${style.resultUlLi} ${style.vermelho1}`}>
                30 a 34,9
              </li>
              <li className={`${style.resultUlLi} ${style.vermelho2}`}>
                35 a 39,9
              </li>
              <li className={`${style.resultUlLi} ${style.vermelho3}`}>≥40 </li>
            </div>
            <div className={style.divLi2}>
              <li className={style.resultUlLiHeader}>CLASSIFICAÇAO</li>
              <li className={`${style.resultUlLi} ${style.amarelo}`}>
                Baixo Peso
              </li>
              <li className={`${style.resultUlLi} ${style.verde}`}>
                Peso Normal
              </li>
              <li className={`${style.resultUlLi} ${style.laranja}`}>
                Excesso de Peso
              </li>
              <li className={`${style.resultUlLi} ${style.vermelho1}`}>
                Obesidade Grau I
              </li>
              <li className={`${style.resultUlLi} ${style.vermelho2}`}>
                Obesidade Grau II
              </li>
              <li className={`${style.resultUlLi} ${style.vermelho3}`}>
                Obesidade Mórbida
              </li>
            </div>
          </ul>
          {ImprimirRes(resultadoFinal)}
        </div>
      </form>
    </div>
  );
};

export default Calculadora;
