// Libs 
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Layout from "../components/layout";
import Main from "../components/About/main";
import Work from "../components/About/Work";

// Style
const Wrap = styled.div`
    width: 92%;
    max-width: 1200px;
    margin: 8rem auto 0;
`;

const About = () => {

    const [check, setCheck] = useState(false);

    return (
        <Layout
            isCheck={check}
            onclick={() => setCheck(!check)}
        >
            <Wrap>
                <Main />
                <Work />
            </Wrap>
        </Layout>
    )
}

export default About;