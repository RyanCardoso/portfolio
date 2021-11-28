// Libs
import React from "react";

// Components
import Layout from "../components/layout";

// Styles
import styled, {createGlobalStyle} from "styled-components";

const GloabalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <GloabalStyle />
      <Layout />
    </Container>
  );
};

export default Home;