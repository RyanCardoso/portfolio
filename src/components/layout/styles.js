import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: ${props => props.width};
    background: purple;
`;