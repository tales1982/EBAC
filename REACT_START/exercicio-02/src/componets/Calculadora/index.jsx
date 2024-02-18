import React from "react";
import ButtonCalc from "../Button/index";
import { SquareDiv, Input, ResultSpan, Teclado } from "./styles";
import cor from "../../styles/color";

const Calculadora = () => {
  function capturaValor(valor) {
    console.log(`Clicou no botão com valor: ${valor}`);
    // Adicione sua lógica para manipular o valor clicado
  }
  return (
    <>
      <SquareDiv>
        <Input type="number" />
        <ResultSpan>78945</ResultSpan>
        <Teclado>
          <div>
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="AC" click={capturaValor} />
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="⇐" click={capturaValor} />
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="void" click={capturaValor} />
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="/" click={capturaValor} />
          </div>
          <div>
            <ButtonCalc valor="7" click={capturaValor} />
            <ButtonCalc valor="8" click={capturaValor} />
            <ButtonCalc valor="9" click={capturaValor} />
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="*" click={capturaValor} />
          </div>
          <div>
            <ButtonCalc valor="4" click={capturaValor} />
            <ButtonCalc valor="5" click={capturaValor} />
            <ButtonCalc valor="6" click={capturaValor} />
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="-" click={capturaValor} />
          </div>
          <div>
            <ButtonCalc valor="1" click={capturaValor} />
            <ButtonCalc valor="2" click={capturaValor} />
            <ButtonCalc valor="3" click={capturaValor} />
            <ButtonCalc styles={{ backgroundColor: cor.darkBlue }}  valor="+" click={capturaValor} />
          </div>
          <div>
            <ButtonCalc  styles={{ width: "126px" }}  valor="0" click={capturaValor} />
            <ButtonCalc valor="." click={capturaValor} />
            <ButtonCalc  styles={{ backgroundColor: cor.darkBlue }}  valor="=" click={capturaValor} />
          </div>
        </Teclado>
      </SquareDiv>
    </>
  );
};

export default Calculadora;
