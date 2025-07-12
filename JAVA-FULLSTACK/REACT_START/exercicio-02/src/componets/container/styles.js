import styled, { keyframes } from "styled-components";
import cor from "../../styles/color";

const rotateBorder = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Bubble = styled.section`
  top: -10px;
  left: -10px;
  height: 750px;
  width: 750px;
  background-color: ${cor.darkBlue};
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    @media (max-width: 768px) {
   display: none;
  }
  }
`;

export const RoundBorder = styled.div`
  top: -10px;
  left: -10px;
  position: absolute;
  height: 745px;
  width: 745px;
  border-radius: 50%;
  border-top: 10px solid #c501e2;
  border-right: 10px solid #9a27f7;
  border-bottom: 10px solid #6664ff;
  border-left: 10px solid #2b97fa;
  animation: ${rotateBorder} 5s linear infinite;

  @media (max-width: 768px) {
   display: none;
  }
`;
