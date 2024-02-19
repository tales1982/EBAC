import styled from "styled-components";
import cor from "../../styles/color";

// Div quadrado
export const SquareDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  position: absolute;
  background-color: ${cor.bodyCalc};
  color: ${cor.text};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

export const Span = styled.span`
  text-align: end;
  height: 70px;
  background-color: ${cor.text};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 28px;
  color: ${cor.darkBlue};
  font-weight: bold;
  border: none;
  padding-right: 10px;
`;

export const ResultSpan = styled.span`
  height: 50px;
  background-color: ${cor.text};
  color: ${cor.darkBlue};
  text-align: end;
  font-size: 40px;
  font-weight: bold;
`;

export const Teclado = styled.div`
margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
