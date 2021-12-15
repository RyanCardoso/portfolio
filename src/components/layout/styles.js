// Libs
import styled, { createGlobalStyle } from "styled-components";

// Components
import { theme } from "../../global/theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    transition: background-color 1s ease-in-out, color 1s ease-in-out;
  } 
`

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: calc(100vw - 280px);
    float: right;
    background-color: ${theme.colors.light1};
`;