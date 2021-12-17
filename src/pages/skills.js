// Libs 
import React from "react";
import styled from "styled-components";

// Components
import Layout from "../components/layout";

// Style
const Wrap = styled.div`
    width: 92%;
    padding: 5rem;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 8rem;
    }
`;

const Skills = () => {
    return (
        <Layout>
            <Wrap>
                <h1>
                    Estamos em manutenção, volte mais tarde!
                </h1>
            </Wrap>
        </Layout>
    )
}

export default Skills;