import React, { useState } from "react";
import ButtonCalc from "../Button/index";
import { SquareDiv, Span, ResultSpan, Teclado } from "./styles";
import cor from "../../styles/color";
import Footer from "../Footer";

const Calculadora = () => {
  const [num, setNum] = useState("");
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(""); // Adicione o estado para o resultado

  const capturaValor = (value) => {
    if (value >= "0" && value <= "9") {
      if (operator === "") {
        setNum((prevNum) => prevNum + value);
      } else {
        setNum2((prevNum2) => prevNum2 + value);
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      setOperator(value);
    } else if (value === "=") {
      const calculatedResult = calculateResult();
      setResult(calculatedResult.toString()); // Convertemos o resultado para string
      setNum(calculatedResult.toString()); // Atualiza num com o resultado
      setOperator("");
      setNum2("");
    } else if (value === "AC") {
      setNum("");
      setOperator("");
      setNum2("");
      setResult(""); // Limpa o resultado ao limpar os valores
    } else if (value === "⇐") {
      // Remove o último caractere do número atual
      if (operator === "") {
        setNum((prevNum) => prevNum.slice(0, -1));
      } else {
        setNum2((prevNum2) => prevNum2.slice(0, -1));
      }
    } else if (value === ".") {
      if (operator === "" && !num.includes(".")) {
        setNum((prevNum) => prevNum + ".");
      } else if (operator !== "" && !num2.includes(".")) {
        setNum2((prevNum2) => prevNum2 + ".");
      }
    }
  };
  

  const calculateResult = () => {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(num) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num) / parseFloat(num2);
        break;
      case "%":
        result = (parseFloat(num2) / 100) * parseFloat(num);
        break;
      default:
        result = 0;
    }
    return result;
  };

  const handleKeyDown = (event) => {
    const key = event.key;

    // Se a tecla pressionada for um número, operador ou "=", chama capturaValor
    if (
      (key >= "0" && key <= "9") ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "%" ||
      key === "="
    ) {
      capturaValor(key);
    } else if (key === "Enter") {
      // Se a tecla Enter for pressionada, também chama capturaValor com "="
      capturaValor("=");
    } else if (key === "Backspace") {
      // Se a tecla Backspace for pressionada, chama capturaValor com "⇐"
      capturaValor("⇐");
    }
  };

  return (
    <>
     <SquareDiv tabIndex={0} onKeyDown={handleKeyDown}>
      <Span>
        {num} {operator} {num2}
      </Span>

        <ResultSpan>{result}</ResultSpan>
        <Teclado>
          <div>
            <ButtonCalc
              styles={{ width: "126px" , backgroundColor: cor.darkBlue }}
              valor="AC"
              onClick={capturaValor}/>
            <ButtonCalc
              styles={{ backgroundColor: cor.darkBlue }}
              valor="⇐"
              onClick={capturaValor}
            />
            <ButtonCalc
              styles={{ backgroundColor: cor.darkBlue }}
              valor="/"
              onClick={capturaValor}
            />
          </div>
          <div>
            <ButtonCalc valor="7" onClick={capturaValor}/>
            <ButtonCalc valor="8" onClick={capturaValor}/>
            <ButtonCalc valor="9" onClick={capturaValor}/>
            <ButtonCalc 
              styles={{ backgroundColor: cor.darkBlue }}
              valor="*"
              onClick={capturaValor}
            />
          </div>
          <div>
            <ButtonCalc valor="4" onClick={capturaValor} />
            <ButtonCalc valor="5" onClick={capturaValor} />
            <ButtonCalc valor="6" onClick={capturaValor} />
            <ButtonCalc
              styles={{ backgroundColor: cor.darkBlue }}
              valor="-"
              onClick={capturaValor}/>
          </div>
          <div>
            <ButtonCalc valor="1" onClick={capturaValor}/>
            <ButtonCalc valor="2" onClick={capturaValor}/>
            <ButtonCalc valor="3" onClick={capturaValor}/>
            <ButtonCalc
              styles={{ backgroundColor: cor.darkBlue }}
              valor="+"
              onClick={capturaValor}
            />
          </div>
          <div>
            <ButtonCalc
              styles={{ width: "126px" }}
              valor="0"
              onClick={capturaValor}
            />
            <ButtonCalc valor="." onClick={capturaValor}/>
            <ButtonCalc
              styles={{ backgroundColor: cor.darkBlue }}
              valor="="
              onClick={capturaValor}
            />
          </div>
        </Teclado>
      </SquareDiv>
      <Footer />
    </>
  );
};

export default Calculadora;
