import styled from "styled-components";
import cor from '../../styles/color'; // Use uma importação relativa



export const HeaderStyles = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: ${cor.darkBlue}; // Use cor.primary em vez de Cor.cor.bg
    width: 100vw;
    color: #fff;
`;

