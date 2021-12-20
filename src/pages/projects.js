// Libs
import React from "react";
import styled from "styled-components";

// Components
import Layout from "../components/layout"
import Config from "../components/Projects/config"

// Style
const Wrap = styled.div`
    width: 92%;
    max-width: 1200px;
    margin: 8rem auto 0;
`;

const Projects = () => {
    return (
        <Layout>
            <Wrap>
                <Config />
            </Wrap>
        </Layout>
    )
}

export default Projects;